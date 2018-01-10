var dbconn = require("../data/dbconnection.js")
var hotelData = require("../data/hotel-data.json")
var ObjectId = require('mongodb').ObjectID;

module.exports.hotelsGetAll = function (req, res) {

    console.log("GET The Hotel data");
    console.log(req.query);

    var db = dbconn.get();
    var collection = db.collection("tech");

    var offset  = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }

    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function (err, docs)
        {
            console.log("Found hotels - ", docs);
            res
                .status(200)
                .json(docs);
        });

};

module.exports.hotelsGetOne = function (req, res) {
    var db = dbconn.get();
    var collection = db.collection("tech");

    var hotelId = req.params.hotelId;

    collection
        .findOne({ _id : ObjectId(hotelId)},function (err,doc) {
            res
                .status(200)
                .json(doc);
        });

};

module.exports.hotelsAddOne = function (req, res) {
    var db = dbconn.get();
    var collection = db.collection("tech");

    console.log("Post new Hotel");

    if(req && req.body.name && req.body.stars){
        var newHotel = req.body;
        collection.insertOne(newHotel, function (err, response) {
            console.log(response);
            res
                .status(201)
                .json(response.ops);
        })

    }else{
        console.log("Data missing from req body");
        res
            .status(400)
            .json({"message":"Data Missing from req body"});
    }


};