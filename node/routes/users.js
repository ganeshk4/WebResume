var express = require('express');
var router = express.Router();
const db = require("../models");
const ORG = db.sequelize.import('../models/organizantion');
const PERSON = db.sequelize.import('../models/person');

/* GET users listing. */
router.get('/', function(req, res, next) {
  PERSON.findAll().then(result => {
    res.status(200).json({data: result});
  });
});

module.exports = router;
