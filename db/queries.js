var knex = require('./knex');

module.exports = {
  getAskers: function(){
    return knex('asker')
    .select('');
  },
  getQuestionsByAsker: function(askerId){
    return knex('question')
    .join('answer', 'question.id', 'answer.question_id')
    .join('asker', 'answer.asker_id', 'asker.id')
    .where({'answer.asker_id': askerId})
    .distinct('question.question')
    .select('question.question', 'question.id');
  },
  getAnswer: function(askerId, questionId){
    return knex('answer')
    .join('question', 'answer.question_id', 'question.id')
    .join('asker', 'answer.asker_id', 'asker.id')
    .select('answer.response')
    .where({asker_id: askerId, question_id: questionId});
  }

};
