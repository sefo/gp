let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let expressJwt = require('express-jwt');
let bcrypt = require('bcrypt-nodejs');
let models = require('../models');

let secret = 'DrKs8P5lXP16Dqn8jTwiRYBtJF25gGjF3kUeP4F08LeklnwCQGoDMouLZcija8Wpk7X1fRvtxytRwaWaRZaMEBQdrDSjRp9OGnVrfrZqosHE0Pfa6omupI5Y';

router.post('/access', function (request, response) {
  var token = {};
  models.Access.findOne({
    where: {
        id: 1
    }
  }).then(function(user_instance) {
    var user = user_instance.get({ plain: true });
    bcrypt.compare(request.body.password, user.hash, function(err, ret) {
      if(ret) {
        token = jwt.sign(user, secret, { expiresIn: 120*60 });
        user.token = token;
        response.json({user: user});
      } else {
        response.status(401).send('No access');
      }
    });
  });
});

router.get('/gen', function (request, response) {
    bcrypt.hash('seb520++', bcrypt.genSaltSync(8), null, function(err, hash) {
        response.json({hash: hash});
    });
});

module.exports = router;