var knex = require('knex')
var config = require('./knexfile')


module.exports = {
  getChallenges: getChallenges
}

function getConnection() {
  return knex(config.development)
}

function getChallenges() {
  var connection = getConnection()
  var challengesList = connection('challenges').select()
  return challengesList
}
