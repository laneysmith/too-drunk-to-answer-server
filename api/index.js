var express = require('express');
var raouter = express.Router();
var queries = require('../db/queries');

router.get('/:asker/:question', function(req, res, next){
  queries.getAnswer(req.params.asker, req.params.question).then(function(data) {
    res.json({data})
  });
});
