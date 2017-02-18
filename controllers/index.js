var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/auth', require('./auth'));
router.use('/auth-connexion', require('./auth-connexion'));
router.use('/api/clients', require('./clients'));

router.get('/app', function(req, res) {
        res.sendFile('/index.html', {root: path.join(__dirname, '..', 'app')});
});

module.exports = router;