//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();


app.get("/", (req, res) => {
  var today = new Date();
  var currentDate = today.getDay();
  if(currentDate === 6 || currentDate === 0){
    res.write("<p>I love you<p>");
    res.send();
  } else{
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
