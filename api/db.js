/**
* db.js
*/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', function(err, db) {
	console.log(err);
	console.log(db);
	console.log("Connected correctly to mongo server");
});