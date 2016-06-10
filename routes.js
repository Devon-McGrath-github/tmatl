var data = require('./db');

module.exports = {
  challenges: challenges,
  createChallenge: createChallenge,
  deleteChallenge: deleteChallenge
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

function createChallenge(req, res) {
  console.log('creating challenge');
  data.addChallenge({
      challenge: req.body.create
    })
    .then(function () {
      res.redirect('/')
    })
}

function deleteChallenge(req, res) {
  console.log('deleting challenge');
  data.deleteChallenge({
      id: req.body.id
    })
    .then(function () {
      res.redirect('/')
    })
}
