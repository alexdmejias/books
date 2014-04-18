var app = require('./app')();
var port = process.env.port || 8080;

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
