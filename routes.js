var data = require('./db');

module.exports = {
  index: index
}

function index(req, res) {
  var model = {
    // layout: 'main',
    title: 'Home'
  }
  data.getChallenges().then(function (data) {
    model.challenges = data
    console.log(data);
    res.render('index', model)
  })
}
