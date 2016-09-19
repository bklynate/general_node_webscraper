var express = require('express');
var request = require('request');
var fs = require('fs');
var cheerio = require("cheerio")
var app = express();
const PORT = process.env.PORT || 3000;

var url = "http://www.indeed.com/cmp/Placid-Express/jobs/Junior-Software-Developer-c0cd1f3c1791098b?sjdu=QwrRXKrqZ3CNX5W-O9jEvaokZOGLHVIo5tHKhzwby2wF4bpKjscnMnzPFjGwUT8pUeGdH2YffWpkK3l5zh3F3gEP-dikfOC7vz6izzHHOHA"

request(url, function(error, response, body){
  var $ = cheerio.load(body);
  var companyName = $('.company');
  var companyNameText = companyName.text();
  // $('.company').filter(function(){
  //   var companyName = $(this);
  //   companyNameText = companyName.text();
  // })

  var jobTitle = $('.jobtitle font');
  var jobTitleText = jobTitle.text();

  var location = $('.location');
  var locationText = location.eq(0).text()

  var summary = $('.summary p');
  var summaryText = summary.text();

  var job = {
    companyName: companyNameText,
    jobTitle: jobTitleText,
    jobSummary: summaryText,
    jobLocation: locationText
  }
  // console.log(companyNameText);
  console.log(job.jobLocation);
  console.log(job.jobTitle);
  console.log(job.jobSummary);


})

app.listen(PORT, function(){
  console.log("Alive on " + PORT)
})