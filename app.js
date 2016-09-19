var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
var port = process.env.PORT;

app.listen(port, function(){
    console.log("Alive on " + port)
})