var express = require('express')
var app = express()
var hbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')
var routes = require('./routes')
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  urlencoded: true
}))
app.use(express.static('public'))
app.engine('hbs', hbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', routes.index)

app.listen(PORT, function () {
  console.log('listening on port: ', PORT);
})
