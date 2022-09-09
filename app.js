var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('express-favicon');
var fonts = require('express-fonts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var profilRouter = require('./routes/profil');
var petaRouter = require('./routes/peta');
var pemerintahanRouter = require('./routes/gov');
var dataRouter = require('./routes/data');

var app = express();


// Specific folder example
// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

app.use(express.static(__dirname + '/public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public/images')));


//use for favicon.
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));






//use for fonts. 

// app.use(fonts({

// }));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profil', profilRouter);
app.use('/', petaRouter);
app.use('/pemerintahan',pemerintahanRouter)
app.use('/data',dataRouter);

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
