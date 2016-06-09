exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('challenges').del(),

    // Inserts seed entries
    knex('challenges').insert({
      challenge: 'Get a haircut'
    }),
    knex('challenges').insert({
      challenge: 'Finish personal project'
    }),
    knex('challenges').insert({
      challenge: 'Start personal project'
    })
  );
};
