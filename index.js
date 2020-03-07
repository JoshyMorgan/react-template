var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var express = requirejs('express');
var app = express();
var path = requirejs('path');


//locate the directory 
app.use(express.static(path.join(__dirname)))
app.use("/images", express.static(__dirname + "/images"))
app.use("/components", express.static(__dirname + "/components"))
app.use("/scripts", express.static(__dirname));
app.use("/semantic", express.static(__dirname + "/semantic"))

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080);