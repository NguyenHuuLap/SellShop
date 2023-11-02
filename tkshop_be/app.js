import userRoutes from './src/frameworks-drivers/express/user.routes.js';
import productRoutes from './src/frameworks-drivers/express/product.routes.js'
import brandRoutes from './src/frameworks-drivers/express/brand.routes.js'
import categoryRoutes from './src/frameworks-drivers/express/category.routes.js'
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './src/data-access/mongodb_connector.js';
import cors from 'cors';


// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

connectDB();

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.set('view engine', 'jade');
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/brand', brandRoutes);
app.use('/category', categoryRoutes);

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, '0.0.0.0', () => console.log(`listening on port 3000`));

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

// mongoose.connect('mongodb://localhost:27017')
//   .then(() => LogUtils.info('DATABASE', `Connected successfully to MongoDB`))
//   .catch(err => LogUtils.info('DATABASE', 'Connect to MongoDB failed', err));


export default app;