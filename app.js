var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
const PORT = process.env.PORT || 3000;

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
// var url = "http://www.google.com";
// var destination = fs.createWriteStream("./downloads/google1.html");
// request(url).pipe(destination);

// Example 3
var url = "http://www.google.com";
var destination = fs.createWriteStream("./downloads/google1.html");
request(url).pipe(destination).on('finish', function(){
    console.log("All Done!");
}).on("error", function(error){
    console.log(error);
});

app.listen(PORT, function(){
    console.log("Alive on " + PORT)
});
