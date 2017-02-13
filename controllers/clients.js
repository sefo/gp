var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
    models.Client.findAll().then(function(clients) {
        res.json(clients);
    });
});

module.exports = router;