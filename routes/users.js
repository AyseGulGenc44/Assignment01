/*File Name: users.js
 *Student's name: Ayse Gul Genc
 *Student's ID: 301088239
 *Date: February 3, 2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
