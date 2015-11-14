var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Dev server listening at localhost:3000');
});

/* Fake API Server Stuff */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

var spending = [
  {id: 1, amountCents: 500, category: 'Server Management'},
];

app.get('/items', function(req, res, next) {
  setTimeout(function() {
    return res.send(JSON.stringify(spending));
  }, 1000);
});

app.put('/items', function(req, res, next) {
  var newItem = {id: getRandomInt(2, 10000), amountCents: Number(req.body.amountCents), category: req.body.category};
  console.log('Received Item', newItem);
  spending = spending.concat(newItem);
  setTimeout(function() {
    // "Technically" you need to PUT and then GET, but I prefer
    // just to return what you would get from hitting the GET endpoint
    return res.send(JSON.stringify(spending));    
  }, getRandomInt(500, 2000));
});

app.listen(3002, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Fake ApiServer listening at http://localhost:3002');
});

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
