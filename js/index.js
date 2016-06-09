import request from 'superagent'
import challengeList from '../views/challengeList.hbs'

const showList = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = challengeList(res.body)
}

const getList = () => {
  const challengeApi = '/challenges'
  request.get(challengeApi).end(showList)
}

document.addEventListener('DOMContentLoaded', getList)
