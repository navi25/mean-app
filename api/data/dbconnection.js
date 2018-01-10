var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://localhost:27017/meanhotel"

var _connection  = null;


var open = function () {
    MongoClient.connect(dburl, function (err, db) {

        if(err){
            console.log("DB Connection failed");
            return;
        }else{
            console.log("DB Connection successful", db);
            _connection = db.db("meanhotel");
        }
    })
    // set the connection
}

var get = function () {
    return _connection;
}

module.exports = {
    open : open,
    get : get
}