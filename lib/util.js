const url = require('url');
const config = require('../config/config');

module.exports = {
  getURI: function getURI (request, composed) {
    var urlObject = {
      protocol: config.get('ratesProtocol'),
      host: config.get('ratesHost') + ':' + config.get('ratesPort') + composed,
      query: request.query
    }
    return url.format(urlObject);
  }
}
