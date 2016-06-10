exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('challenges').del(),

    // Inserts seed entries
    knex('challenges').insert({
      challenge: 'Mow the lawn'
    }),
    knex('challenges').insert({
      challenge: 'Get Haircut'
    }),
    knex('challenges').insert({
      challenge: 'Start personal project'
    })
  );
};
