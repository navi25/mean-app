require("./api/data/dbconnection.js").open();
var express = require("express");
var path = require("path");
var app = express();
var routes = require("./api/routes");
var bodyParser = require("body-parser")

app.set("port", 3000);

// app.use(function (req, res, next) {
//     console.log(req.method, req.url);
//     next();
// });


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}))

app.use('/api',routes);

// app.get('/json', function (req, res) {
//     res
//         .status(200)
//         .sendFile(path.join(__dirname,"app.js") );
// });

var server = app.listen(app.get("port"), function () {
    var port = server.address().port;
    console.log("Magic happens on port " + port );
});