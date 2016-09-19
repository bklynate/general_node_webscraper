var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
var port = process.env.PORT;

//Example 1
// var url = "http://www.google.com";

// request(url, function(error, response, body){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(body);
//     }
// });

//Example 2


app.listen(port, function(){
    console.log("Alive on " + port)
})