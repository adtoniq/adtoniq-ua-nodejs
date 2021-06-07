var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);

// ---------------------------
// Utilities
// ---------------------------

var jsonFormat = require('json-format');
var fs = require('fs');

// ---------------------------
// Adtoniq Universal Adapter
// ---------------------------
const AdtoniqUA = require("adtoniq-ua")
const auaPollInterval = 10000 // mseconds
const auaURL = "https://d1hwfp4apoj7bu.cloudfront.net/c/z-zyo372002-ngrok-io.html"

const adtoniqUA = new AdtoniqUA(auaURL, auaPollInterval);

// Example using direct HTML
app.get('/', function(req, res) {
  const data = getDemoData(adtoniqUA.getHeadCode())
  const html = getHTML(data, res)
  res.send(html)
})

// Example using jade
app.get('/jadedemo', function(req, res) {
  adtoniq.getHeadCode({}, (headCode) => {
    const data = getDemoData(headCode)
    // Render using jade template 'views/demo.jade'
    res.render('demo', data)
  })
})


// Gets data for demo page
function getDemoData(headCode, extension="") {
  var head = fs.readFileSync('head'+extension+'.html', 'utf8')
  var body = fs.readFileSync('body'+extension+'.html', 'utf8')
  const data = {
    title: 'Adtoniq demo'
    , headCode: headCode
    , head: head
    , body: body
  }
  return data
}

// Generates HTML for demo data
function getHTML(data, res) {
  var html = `<html>
  <head>
  ${data.headCode}
  ${data.head}
  </head>
  <body>
  ${data.body}
  </body>
  </html>
  `
  return html
}

// ---------------------------
// End of Adtoniq code
// ---------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
