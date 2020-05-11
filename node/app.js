var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var auth = require('./auth');
var apiRouter = require('./routes/api');

var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsOptions), auth);
app.use('/api', cors(corsOptions), apiRouter);

const db = require("./models");
db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
