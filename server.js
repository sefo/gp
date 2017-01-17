var app = require('./app');
var port = 8080;
var http = require('http');
var server = http.createServer(app);

app.use(function(request, response, next) {
        console.log("requete " + request);
        next();
});

server.listen(port, function() {
        console.log('server listening on port ', port);
});
