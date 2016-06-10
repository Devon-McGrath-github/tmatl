var knex = require('knex')
var config = require('./knexfile')

module.exports = {
  getChallenges: getChallenges,
  addChallenge: addChallenge,
  deleteChallenge: deleteChallenge,
  getCompleteChallenges: getCompleteChallenges
}

function getConnection() {
  return knex(config.development)
}

function getChallenges() {
  var connection = getConnection()
  var challengesList = connection('challenges').select()
  return challengesList
}

function addChallenge(newTask) {
  var connection = getConnection()
  return connection
    .insert({
      challenge: newTask.challenge
    })
    .into('challenges')
    .catch(displayError)
}

function deleteChallenge(idObj) {
  // console.log(id, "at db function");
  // console.log(id.id);
  var connection = getConnection()
  return connection('challenges')
    .where('id', idObj.id)
    .del()
}

function getCompleteChallenges() {
  var connection = getConnection()
  var completedList = connection('completed').select()
    // console.log(completedList);
  return completedList
}



// ERROR FUNCTION REFRENCED BY OTHER FUNCTIONS
/*________________________________________________________*/
function displayError(error) {
  console.log(error);
}
