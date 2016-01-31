require('dotenv').load();

var config = {
  apiConfig: {
    serviceHost: process.env.SERVICE_HOST,
    servicePort: process.env.SERVICE_PORT,
    ratesHost: process.env.RATES_HOST,
    ratesPort: process.env.RATES_PORT,
    ratesProtocol: process.env.RATES_PROTOCOL,
	ratesdbHost: process.env.DB_HOST,
	ratesdbPort: process.env.DB_PORT,
	ratesdbName: process.env.DB_NAME,
	ratesdbProtocol: process.env.DB_PROTOCOL,
	banguatWS: process.env.BANGUAT_WS
  }
};

module.exports = {
  get: function get(key) {
    if( config.apiConfig[key] !== undefined ){
      return config.apiConfig[key];
    } else {
      throw {
        code: 500,
        error: 'Internal server error'
      };
    }
  }
}
