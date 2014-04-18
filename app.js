module.exports = function() {
    var express = require('express'); // is it needed?
    var app = express();
    // var routes = require('./routes');
    var logger = require('morgan');
    var path = require('path');
    var jade = require('jade');

    app.use(logger('dev'));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // get all the routes
    require('./routes')(app);

    return app;
}
