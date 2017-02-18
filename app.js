var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'DrKs8P5lXP16Dqn8jTwiRYBtJF25gGjF3kUeP4F08LeklnwCQGoDMouLZcija8Wpk7X1fRvtxytRwaWaRZaMEBQdrDSjRp9OGnVrfrZqosHE0Pfa6omupI5Y';
var app = express();

app.use('/api', expressJwt({secret: secret}));
app.use('/auth-connexion', expressJwt({secret: secret}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/dist'));

app.use(require('./controllers'));

module.exports = app;