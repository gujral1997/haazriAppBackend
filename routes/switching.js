var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'klo',
  database:'haazriLogin',
});
router.post('/', function(req, res, next) {
  var status=req.body.status;
  connection.query("SELECT * FROM student",function(err,row,fields)
  {
    if(err)console.log(err);
    res.send({'success':true,'message':row});
  });
});
module.exports = router;
