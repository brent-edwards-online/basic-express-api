var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');
var users = require('./routes/users');
var Tasks = require('./routes/Tasks');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // Template engine

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', users);
app.use('/Tasks', Tasks);

//app.use('/', routes);
function stuff(req, res, next){
  console.log('I do stuff');
  next();
}
function morestuff(req, res, next){
  console.log('I do more stuff');
  next();
}
function log(req, res, next){
  console.log('I\m a logger and I\m ok');
  next();
}
/* GET home page. */
app.get('/', stuff, log, function(req, res, next) {
  res.render('index', { title: 'Ullo govener' });
});

app.post('/', function(req, res) {
  res.render('index', { title: 'Ullo govener I\'m posting' });
});

app.put('/', function(req, res) {
  res.render('index', { title: 'Ullo govener I\'m putting' });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;