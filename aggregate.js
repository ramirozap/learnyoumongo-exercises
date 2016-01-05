var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"

mongo.connect(url, function(err, db){
  var collection = db.collection("prices")

  collection.aggregate([
    { $match: { size: process.argv[2] }},
    { $group: {
      _id: "average",
      average: {$avg: "$price"}
    }}
  ]).toArray(function(err, result){
    console.log(result[0].average.toFixed(2));
    db.close()
  })


})
