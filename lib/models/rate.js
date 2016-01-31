"use strict"

const database = require('../../config/database');
const joi = require('joi');
var Schema = database.mongoose.Schema;

/*SCHEMAS*/

var rateSchema = new Schema({
  value: {type: Number, required: true},
  createdAt: {type: Date, required: true},
  rateType: {type: String, required: true}
});

var schemaJoi = joi.object().keys({
  _id: joi.any().required(),
  value: joi.number().required(),
  createdAt: joi.date().format('YYYY-MM-DD HH:mm:ss').required(),
  rateType: joi.string().required()
}).with('_id', ['value', 'createdAt', 'rateType']);

var schemaJoiUpdate = joi.object().keys({
  _id: joi.any().required(),
  value: joi.number().required(),
  createdAt: joi.date().format('YYYY-MM-DD HH:mm:ss').required(),
  rateType: joi.string().required()
}).or('value', 'createdAt', 'rateType');

/*Validation*/

rateSchema.statics.validate = function validate (val, callback) {
  joi.validate(val, schemaJoi, function (err, value) { 
	if (!err) {
      callback();
	}
	else {
	  console.log(err);
	  callback(err);
	};
  });
};

rateSchema.statics.validateUpdate = function validateUpdate (val, callback) {
  joi.validate(val, schemaJoiUpdate, function (err, value) { 
	if (!err) {
      callback();
	}
	else {
	  console.log(err);
	  callback(err);
	};
  });
};

var rate = database.mongoose.model('rate', rateSchema);

module.exports = {
	rate: rate
}
