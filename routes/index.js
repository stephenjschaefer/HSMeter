var express = require('express');
var app = express();
var router = express.Router();

var compass = require('node-compass');
app.use(compass());

/* GET Survey Page. */
router.get('/', function(req, res, next) {
  res.render('survey', { title: 'Survey' })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
