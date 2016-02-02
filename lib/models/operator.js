const request = require('request');
const boom = require('boom');
const config = require('../../config/config');

const rateModel = require('./rate').rate;

module.exports = {

  getRateHandler: function getRateHandler(request, response) {
	rateModel.find({}, function(err, rates) {
      if (err) {
	    response(boom.badImplementation(err));
      } 
      else {
        response(rates);
      }
    });
  },
  
  postRateHandler: function postRateHandler(request, response) {
	var newRate = new rateModel(request.payload);
	rateModel.validate(newRate.toJSON(), function(err) {
	  if(err) {
		response(boom.create(422, err.message, err));
	  }		  
	  else {
		newRate.save(function(err, rate) {
          if (!err) {
            response(rate).created('/rate/' + rate._id);
          } 
          else {
            if (11000 === err.code || 11001 === err.code) {
              response(boom.forbidden("Ese ID ya existe"));
            }
            else {
              response(boom.forbidden(err));
	        }
          }
        });  
	  }	  
	});
	
  },
  
  putRateHandler: function putRateHandler(request, response) {
	rateModel.findOne({'_id': request.params.id}, {__v: 0}, function (err, rateUpdate) {
      if (!err) {
		if(request.payload.value){
		  rateUpdate.value = request.payload.value;
		}
		if(request.payload.createdAt){
		  rateUpdate.createdAt = request.payload.createdAt;
		}
		if(request.payload.rateType){
		  rateUpdate.rateType = request.payload.rateType;
		}
		//console.log(JSON.stringify(rateUpdate, null, 4)+'$$$$$');
		rateModel.validateUpdate(rateUpdate.toJSON(), function(err) {
		  if(err) {
			response(boom.create(422, err.message, err));
		  }
		  else {
			rateUpdate.save(function(err, rate) {
              if (!err) {
                response(rate); 
              } 
              else {
			    response(boom.forbidden(err));
		      }
            }); 
		  }		  
		});        
      } 
      else {
        response(boom.badImplementation(err));
      }
    });

  },
  
  deleteRateHandler: function deleteRateHandler(request, response) {
	rateModel.findOne({'_id': request.params.id}, function (err, rateDelete) {
	  if (!err && rateDelete) {
		rateDelete.remove();
		response(rateDelete);
	  }
	  else if (!err) {
		response(boom.notFound(err));
	  }
	  else {
        response(boom.badRequest(err));
      }
	});
  },
  
  getRateIdHandler: function getRateIdHandler(request, response) {
	rateModel.findOne({'_id': request.params.id}, {__v: 0}, function (err, rate) {
      if (err) {
	    response(boom.badImplementation(err));
      } 
      else {
        response(rate);
      }
    });
  },
  
  getRateLatestHandler: function getRateLatestHandler(request, response) {
	rateModel.findOne({'rateType': request.params.rateType}, {__v: 0}).sort({createdAt: -1}).exec(function (err, rate) {
      if (err) {
	    response(boom.badImplementation(err));
      } 
      else {
        response(rate);
      }
    });
  }
}
