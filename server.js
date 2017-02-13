var app = require('./app');
var port = 8080;
var http = require('http');
var server = http.createServer(app);
var models = require('./models');

app.use(function(request, response, next) {
        console.log("requete " + request);
        next();
});

models.sequelize.sync().then(function() {
	server.listen(port, function() {
		console.log('server listening on port ', port);
	});
});