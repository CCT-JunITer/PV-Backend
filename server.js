// server.js is entry point

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

app.use( function(req, res, next) {
  // Website you wish to allow to connect for testing: localhost
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next()
})


const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
app.put('/put', (req, res) => {
  console.log(req)
  res.send('WORKS');
});