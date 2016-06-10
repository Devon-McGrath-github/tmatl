exports.up = function (knex, Promise) {
  console.log('Creating completed')
  return knex.schema.createTableIfNotExists('completed', function (table) {
    table.increments('id').primary()
    table.string('complete')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping completed')
  return knex.schema.dropTableIfExists('completed').then(function () {
    console.log('completed table was dropped')
  })
}
