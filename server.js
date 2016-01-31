const Hapi = require('hapi');
const config  = require('./config/config');
const routes  = require('./config/routes');

const server = new Hapi.Server();

server.connection({
  host: config.get('serviceHost'),
  port: config.get('servicePort')
});

server.route(routes);

if (!module.parent) {
  server.start(function starter() {
    console.log('Server running at: ', server.info.uri);
  });
}

module.exports = server;
