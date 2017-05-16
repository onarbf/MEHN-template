var express = require('express');

var routes = express.Router();


routes.get('/',(req,res)=>{
  res.render('test');
})




module.exports = routes;
