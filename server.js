const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const enforce = require('express-sslify')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

function serverStart(done){
  app.use(enforce.HTTPS({ trustProtoHeader: true }))
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }))
  app.use(bodyParser.json({limit: '1mb'}))
  app.use(logger(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
  app.use(express.static(path.resolve() + '/dist/'))
  app.set('views', path.resolve() + '/views/')
  app.set('view engine', 'pug')

  app.get('*', (req, res) => {
    res.render('index', {})
  })

  return new Promise(resolve => {
    const server = app.listen(process.env.PORT || 4001, () => {
      console.log(`Listening on port ${server.address().port}`)
      resolve(server)
    })
  })
}

module.exports = { serverStart }
