var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    models.Client.findAll().then(function(clients) {
        res.json(clients);
    });
});

router.post('/', function (req, res) {
    models.Client.create({
        name: req.body.name,
        telephone: req.body.telephone,
        address: req.body.address,
        zip: req.body.zip,
        city: req.body.city
    }).then(function(data) {
        res.status(200);
        res.json(data.get({plain: true}));
    }).catch(function(error) {
        res.status(500);
        res.json({error:error});
    });
});

module.exports = router;