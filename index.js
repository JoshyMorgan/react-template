var express = require("express")
var app = express()
var path = require("path")

//locate the directory 
app.use(express.static(path.join(__dirname)))
app.use("/images", express.static(path.join(__dirname + "/images")))
app.use("components", express.static(path.join(__dirname + "/components")))
app.use("/semantic", express.static(path.join(__dirname + "/semantic")))

//
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.listen(process.env.PORT || 8080);
