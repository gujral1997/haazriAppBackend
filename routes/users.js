var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'klo',
  database:'haazriLogin',
});
/* Our backend point to check users in the database */
router.post('/', function(req, res, next) {
  var userName=req.body.userName;
  //had to encrypt password in future,right now storing as a string
  var password=req.body.password;
  connection.query("SELECT * FROM login WHERE userName= ? AND password= ?",[userName,password],function(err,row,fields)
  {
    if(err)console.log(err);
    if(row.length>0)
    {
      res.send({'success':true,'message':row[0].userName});
    }
    else {
      res.send({'success':false,'message':'User not found, please try again'});
    }
  });
});

module.exports = router;
