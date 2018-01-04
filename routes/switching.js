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
  var value=req.body.value;
  var name=req.body.name;
  connection.query("UPDATE student SET status=? WHERE name=?",[value,name],function(err,row,fields)
  {
    if(err)console.log(err);
    function status(value)
    {
      if (value==='false')
      {
        return 'absent'
      }
      else {
        {
          return 'present'
        }
      }
    }
    res.send({'success':true,'message':'Status of '+name+' has been updated to '+status(value)});
  });
});
module.exports = router;
