var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/members', function(req, res, next) {
  res.render('pages/members', { title: 'Express' });
});

module.exports = router;
