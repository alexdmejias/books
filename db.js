var mongoose = require('mongoose'),
    creds = require('./creds.js');

mongoose.connect('mongodb://'+creds.db.user+':'+creds.db.pass+'@ds053788.mongolab.com:53788/alexdmejias');

module.exports = mongoose.connection;
