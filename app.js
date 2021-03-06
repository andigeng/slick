var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var dbURL = 'mongodb://localhost/slick';
mongoose.connect(dbURL, function(err, res){
    if (err){
        console.log('CONNECTION FAILED: ' + err);
    } else {
        console.log('CONNECTION SUCCESS');
    }
});


var routes = require('./server/routes/main-router');
var api = require('./server/routes/api-router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'hjs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


//var favicon = require('serve-favicon');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));