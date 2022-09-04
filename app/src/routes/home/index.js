"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl") //home.ctrl.js를 include해주고

router.get('/', ctrl.home); //export되는 일종의 변수들을 갖다 쓴다.
router.get('/login', ctrl.login);
module.exports = router;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
