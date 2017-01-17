var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/api/test', require('./test'));

router.get('/app', function(req, res) {
        res.sendFile('/index.html', {root: path.join(__dirname, '..', 'app')});
});

module.exports = router;