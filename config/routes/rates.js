const handlers = require('../../lib/controllers/handlers');

module.exports = [
  {
    method:  'GET',
    path:    '/api/rates',
    config:  {
      handler: handlers.getRateHandler
    }
  },
  {
    method:  'POST',
    path:    '/api/rates',
    config:  {
      handler: handlers.postRateHandler
    }
  },
  {
    method:  'PUT',
    path:    '/api/{id}/rates',
    config:  {
      handler: handlers.putRateHandler
    }
  },
  {
    method:  'DELETE',
    path:    '/api/{id}/rates',
    config:  {
      handler: handlers.deleteRateHandler
    }
  },
  {
    method:  'GET',
    path:    '/api/{id}/rates',
    config:  {
      handler: handlers.getRateIdHandler
    }
  },
  {
    method:  'GET',
    path:    '/api/rates/{rateType}/latest',
    config:  {
      handler: handlers.getRateLatestHandler
    }
  },
];
