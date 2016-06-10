var data = require('./db');

module.exports = {
  challenges: challenges,
  createChallenge: createChallenge
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
