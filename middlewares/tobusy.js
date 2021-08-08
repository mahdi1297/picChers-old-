var toobusy = require('toobusy-js'),
    express = require('express');
 
var app = express();
 
// middleware which blocks requests when we're too busy
app.use(function(req, res, next) {
  if (toobusy()) {
    res.end("Sorry!! i am busy now, please try again later");
  } else {
    next();
  }
});

module.exports = app;