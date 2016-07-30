var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/**
 * @api {get} /api/askers Request list of askers
 * @apiName getAllAskers
 * @apiGroup askers
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [
 *         {
 *           "id": 1,
 *           "asker": "mom"
 *         },
 *         {
 *           "id": 2,
 *           "asker": "cop"
 *         },
 *         {
 *           "id": 3,
 *           "asker": "friend"
 *         },
 *         {
 *           "id": 4,
 *           "asker": "girlfriend/boyfriend"
 *         }
 *       ]
 *     }
 */
router.get('/askers', function(req, res, next){
  queries.getAskers().then(function(data) {
    res.json({data})
  });
});

/**
 * @api {get} /api/askers/:askerId Request list of questions by asker id
 * @apiName getQuestionsByAsker
 * @apiGroup questions
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [
 *         {
 *           "question": "Do you know why I pulled you over?",
 *           "id": 3
 *         },
 *         {
 *           "question": "Where are you heading?",
 *           "id": 4
 *         }
 *       ]
 *     }
 */
router.get('/askers/:id', function(req, res, next){
  queries.getQuestionsByAsker(req.params.id).then(function(data) {
    res.json({data})
  });
});

/**
 * @api {get} /api/askers/:askerId/questions/:questionId Request list of responses by asker & question combination
 * @apiName getResponse
 * @apiGroup responses
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [
 *         {
 *           "response": "Can't say where I am, but I can tell you where I'm not."
 *         },
 *         {
 *           "response": "At the library."
 *         }
 *       ]
 *     }
 */
router.get('/askers/:asker/questions/:question', function(req, res, next){
  queries.getAnswer(req.params.asker, req.params.question).then(function(data) {
    res.json({data})
  });
});

module.exports = router;
