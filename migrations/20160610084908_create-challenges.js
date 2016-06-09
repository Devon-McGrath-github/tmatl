exports.up = function (knex, Promise) {
  console.log('Creating challenges')
  return knex.schema.createTableIfNotExists('challenges', function (table) {
    table.increments('id').primary()
    table.string('challenge')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping challenges')
  return knex.schema.dropTableIfExists('challenges').then(function () {
    console.log('challenges table was dropped')
  })
}
