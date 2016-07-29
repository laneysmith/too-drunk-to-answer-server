var express = require('express');
var raouter = express.Router();
var queries = require('../db/queries');

router.get('/', function(req, res, next){
  queries.getAnswer();
});
