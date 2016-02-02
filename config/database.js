const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.get('ratesdbProtocol') + '://' + config.get('ratesdbHost') + '/' + config.get('ratesdbName'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

module.exports = {
	mongoose: mongoose,
	db: db	
}
