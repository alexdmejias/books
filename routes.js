module.exports = function(app) {

    app.get('/hello/:name', function(req, res) {
        console.log('hello');
        res.send('home page ' + req.params.name)
    });

    app.get('/about', function(req, res) {
        res.send('about page')
    });


};
