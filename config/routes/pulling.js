const handlers = require('../../lib/controllers/handlers');

module.exports = [
  {
    method:  'GET',
    path:    '/api/rates/infoDiario',
    config:  {
      handler: handlers.getInfoDiarioHandler
    }
  },
  {
    method:  'GET',
    path:    '/api/rates/infoMensual',
    config:  {
      handler: handlers.getInfoMensualHandler
    }
  },
  {
    method:  'GET',
    path:    '/api/rates/variablesDisponibles',
    config:  {
      handler: handlers.getVariablesDisponiblesHandler
    }
  }
];
