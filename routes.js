var data = require('./db');

module.exports = {
  challenges: challenges
}

function challenges(req, res) {
  var model = {
    // layout: 'main',
    title: 'Home'
  }
  data.getChallenges().then(function (data) {
    model.challenges = data
    console.log(data);
    res.json(model)
  })
}
