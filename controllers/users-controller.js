
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));


router.post('/user/add',function(req,res) {
  console.log('Hello world! users');
  var id = 2; //res.id;
  res.json({id:3});
  // return res.redirect('/user/'+id);
  // res.render(path.join(__dirname,"../views/user.handlebars"));
});
router.get('/user:id',function(req,res) {
  var id = req.params.id;
  console.log('Helhlkjlo world! user');

//   res.sendFile(path.join(__dirname, "../public/home.html"));
  res.render(path.join(__dirname,"../views/user.handlebars"));
});

module.exports = router;