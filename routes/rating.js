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
  var rating=req.body.rating;
  var id = 1;
  connection.query("UPDATE rating SET rating=? where id = ?",[rating, id],function(err,row,fields)
  {
    if(err)console.log(err);
      res.send({'success':true,'message':row.rating});
  });
});
module.exports = router;
