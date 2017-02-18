var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {

    if(req.user === undefined || req.user === null) {
        res.status(401).send({logFailed: true});
    } else {
        models.Access.find({
            where: {
                id : req.user.id
            }
        }).then(function(result) {
            if(result === null) {
                res.status(204).send();
            } else {
                res.status(200);
                res.json(result);
            }
        });
    }
});

module.exports = router;