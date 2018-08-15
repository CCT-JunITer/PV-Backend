// server.js is entry point


const express        = require('express')
const MongoClient    = require('mongodb').MongoClient
const bodyParser     = require('body-parser')
const db             = require('./database');

const app            = express()

app.use((req, res, next) => {
  // Website you wish to allow to connect for testing: localhost
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
next()
})
app.use(express.json())

const port = 8080

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database.db("PV-DB"));
app.listen(port, () => {
  console.log('We are live on ' + port + ' with DB: ' + db.url);
});
})
