var express = require('express');
var router = express.Router();

/* CREATE */
router.post('/', function(req, res, next) {
    res.send('Create succes');
});

/* READ */
router.get('/', function(req, res, next) {
    res.send('Read success');
});

/* UPDATE */
router.put('/', function(req, res, next) {
    res.send('Update success');
});

/* DELETE */
router.delete('/', function(req, res, next) {
    res.send('Delete success');
});

module.exports = router;
