const request = require('request');
const util = require('../util');
const url = require('url');
const soap = require('soap');
const config = require('../../config/config');

module.exports = {

  getInfoDiario: function getInfoDiario(request, response) {
	return new Promise((resolve, reject) => {
	  var args = {	
		InfoDiario: {
		  fecha_inicial_ddmmaaaa: "23012016",
		  fecha_final_ddmmaaaa: "24012016",
		  variable: "ALTPM"	  
		}		  
	  };
	  soap.createClient(config.get('banguatWS'), function(err, client) {
		if (err) return reject(err);
		  
	    client.InfoDiario(args, function(err, result) {
          console.log(result);
          resolve(result.InfoDiarioResult.DatosDiario.dDiario);
        });      
	  });	
    });
  },
  
  getInfoMensual : function getInfoMensual(request, response) {
	return new Promise((resolve, reject) => {
	  var args = {	
		InfoMensual : {
		  mes_inicial: 1,
		  anio_inicial: 2014,
		  anio_final: 2015,
		  variable: "ALTPM"	  
		}		  
	  };
	  soap.createClient(config.get('banguatWS'), function(err, client) {
	    if (err) return reject(err);
	    
	    client.InfoMensual(args, function(err, result) {
          console.log(result);
          resolve(result.InfoMensualResult);
        });      
	  });	
    });
  },
    
  getVariablesDisponibles : function getVariablesDisponibles (request, response) {
	return new Promise((resolve, reject) => {
	  var args = {};
	  soap.createClient(config.get('banguatWS'), function(err, client) {
	    if (err) return reject(err);

	    client.VariablesDisponibles(args, function(err, result) {
          console.log(result);
          resolve(result.VariablesDisponiblesResult.Variables.Variable);
        });      
	  });	
    });
  } 
}
