const receiver = require('../models/receiver');
const operator = require('../models/operator');
const boom = require('boom');

module.exports = {
  getInfoDiarioHandler: function getInfoDiarioHandler(request, response) {
	var result = receiver.getInfoDiario(request, response);
	result.then(function(data){
	  response({message: data});
	});   
  },
  getInfoMensualHandler: function getInfoMensualHandler(request, response) {
	var result = receiver.getInfoMensual(request, response);
	result.then(function(data){
	  response({message: data});
	});   
  },
  getVariablesDisponiblesHandler: function getVariablesDisponiblesHandler(request, response) {
	var result = receiver.getVariablesDisponibles(request, response);
	result.then(function(data){
	  response({message: data});
	});   
  },
  getRateHandler: function getRateHandler(request, response) {
    var headers = request.headers;
    operator.getRateHandler(request, response);
  },
  postRateHandler: function postRateHandler(request, response) {
    var headers = request.headers;
    operator.postRateHandler(request, response);
  },
  putRateHandler: function putRateHandler(request, response) {
    var headers = request.headers;
    operator.putRateHandler(request, response);
  },
  deleteRateHandler: function deleteRateHandler(request, response) {
    var headers = request.headers;
    operator.deleteRateHandler(request, response);
  },
  getRateIdHandler: function getRateIdHandler(request, response) {
    var headers = request.headers;
    operator.getRateIdHandler(request, response);
  },
  getRateLatestHandler: function getRateLatestHandler(request, response) {
    var headers = request.headers;
    operator.getRateLatestHandler(request, response);
  }
}
