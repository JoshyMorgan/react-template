import express, { static } from 'express';
var app = express();
import { join } from 'path';


//locate the directory 
app.use(static(join(__dirname)))
app.use("/images", static(__dirname + "/images"))
app.use("/components", static(__dirname + "/components"))
app.use("/scripts", static(__dirname));
app.use("/semantic", static(__dirname + "/semantic"))

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080);