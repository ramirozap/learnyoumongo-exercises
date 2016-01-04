var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"

var name = {}
name.firstName = process.argv[2]
name.lastName = process.argv[3]

mongo.connect(url, function(err, db){
  var collection = db.collection("docs");
  
  collection.insert(name,function(err, data){
    if (err) throw err
    console.log(JSON.stringify(name))
    db.close()
  })
})
