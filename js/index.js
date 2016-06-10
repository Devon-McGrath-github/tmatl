import request from 'superagent'
import challengeList from '../views/challengeList.hbs'
import completedList from '../views/completedChallenges.hbs'

const showList = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = challengeList(res.body)
}

const getList = () => {
  const challengeApi = '/challenges'
  request.get(challengeApi).end(showList)
}

const showCompletedList = (err, res) => {
  const placeholder = document.getElementById('placeholder2')
  placeholder2.innerHTML = completedList(res.body)
}

const getCompletedList = () => {
  const challengeApi = '/getCompleted'
  request.get(challengeApi).end(showCompletedList)
}

document.addEventListener('DOMContentLoaded', getCompletedList)
document.addEventListener('DOMContentLoaded', getList)
