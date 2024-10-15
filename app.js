var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// connect model to database mongoDB
const mongoose = require('mongoose');
require('./model/customer');
require('./model/detail_order');
require('./model/order');
require('./model/payment');
require('./model/product_size');
require('./model/product');
require('./model/size');
require('./model/type_product');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Kết nối với Database mongoDB
mongoose.connect('mongodb+srv://BanBan:BanBan4774@cluster0.vccez.mongodb.net/Data_ASM_API')
  .then(() => console.log('>>>>>>>>>>>>>>>> DB Connected'))
  .catch(err => console.log('>>>>>>>>>>>>>>>> DB Error: ', err));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
