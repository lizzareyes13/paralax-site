// console.log('test')
// const mongoose = require('mongoose')
// const connection = mongoose.connection
// const Schema =  mongoose.Schema
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
//
// //db configuration
// mongoose.connect('mongodb://localhost/paralaxdb');
// mongoose.Promise = global.Promise
//
//
// var db = mongoose.connection
//
// db.on('error', function(){
//   console.log("can't connect to DB")
// })
//
// db.once('open', function(){
//   console.log("connected to DB! 💁");
// })
//
// //set up middleware
// const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors())
//
//

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $.ajax({
      url: 'http://fvi-grad.com:4004/quote',
      success: function(res, txt, xhr){
        $("#quote").html(res.quote)
        $("#author").html(res.author)

      }
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space
