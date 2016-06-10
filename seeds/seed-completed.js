exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('completed').del(),

    // Inserts seed entries
    knex('completed').insert({
      complete: 'Take over the world'
    }),
    knex('completed').insert({
      complete: 'brush teeth'
    }),
    knex('completed').insert({
      complete: 'finish personal project'
    })
  );
};
