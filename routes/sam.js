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
  connection.query("SELECT * FROM sam",function(err,row,fields)
  {
    if(err)console.log(err);
    if(row.length>0)
    {
        res.send({'success':true,'message':row});
    }
    else {
      res.send({'success':false,'message':'Student not found, please try again'});
    }

  });
});
module.exports = router;
