"use strict"
/*const http = require("http")
const app = http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  if (req.url === '/') {
    res.end("여기는 ROOT");
  } else if (req.url === "/login") {
    res.end("여기는 LOGIN");
  }
});
app.listen(3001, () => {
  console.log("http 서버 기동합니다.");
});*/

const express = require('express')
const app = express();

//라우팅 세팅, 컨트롤러 포함한다.
const home = require("./src/routes/home"); //routes/home에서 index.js를 include한다. 그러면 index.js에서는 컨트롤러인 home.ctrl.js를 include를 하는데 여기서 각 views/home/... 으로 라우팅 처리를 한다.
app.use("/", home);//use는 미들웨어를 등록해주는 메서드. home.ctrl.js에서 export한

//앱 세팅 - view관련 설정
app.set("views", "./src/views") //views폴더 지정
app.set("view engine", "ejs") //views에서 사용할 엔진으로 ejs 설정. 확장자가 ejs가 된다.

module.exports = app; // bin/www.js에서 app을 받아서 서버 구동시 사용한다.

/*
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
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
*/
