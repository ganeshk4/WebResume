var express = require('express');
var router = express.Router();
var userRouter = require('./users')

/* GET home page. */
/* GET users listing. */
router.use('/user', userRouter);

module.exports = router;
