// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/keyboard-control-door", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/rotating-door", function (request, response) {
  response.sendFile(__dirname + '/views/rotating-door.html');
});

app.get("/voice-control-door", function (request, response) {
  response.sendFile(__dirname + '/views/voice-control-door.html');
});

app.get("/proximity-control-door", function (request, response) {
  response.sendFile(__dirname + '/views/proximity-control-door.html');
});

app.get("/map", function (request, response) {
  response.sendFile(__dirname + '/views/map.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
