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

var categories = [
  'Server Food (POWER)',
  'Server Home (CO-LO)',
];

app.get('/items', function(req, res, next) {
  setTimeout(function() {
    return res.send(JSON.stringify(spending));
  }, 1000);
});

app.post('/items', function(req, res, next) {
  var newItem = {id: getRandomInt(2, 10000), amountCents: Number(req.body.amountCents), category: req.body.category};
  console.log('Received Item', newItem);
  spending = spending.concat([newItem]);
  setTimeout(function() {
    return res.send(JSON.stringify(spending));    
  }, getRandomInt(500, 2000));
});

app.get('/categories', function(req, res, next) {
  setTimeout(function() {
    return res.send(JSON.stringify(categories));
  }, getRandomInt(400, 4000));
});

app.post('/categories', function(req, res, next) {
  var newCategory = req.body.category.categoryName;
  console.log('Received Category', newCategory);
  if (categories.indexOf(newCategory) > -1) {
    return res.status(500).return('That category already exists');
  }
  categories = categories.concat([newCategory]);
  setTimeout(function() {
    return res.send(JSON.stringify(categories));    
  }, getRandomInt(500, 2000));
});

app.delete('/categories/:category', function(req, res, next) {
  var categoryToDelete = req.params.category;
  console.log('Received Category to delete', categoryToDelete);
  var categoryIndex = categories.indexOf(categoryToDelete);
  if (categoryIndex < 0) {
    return res.status(500).return('That category doesnt exist');
  }
  categories.splice(categoryIndex, 1);
  setTimeout(function() {
    return res.send(JSON.stringify(categories));    
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
