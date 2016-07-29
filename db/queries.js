var knex = require('./knex');

module.exports = {
  getAnswer: function(asker, question){
    return knex('answers')
    .select('response')
    .where({asker: asker, question: question});
  }
};
