/**
* db.js
*/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', function(err, db) {
	console.log(err);
	if (!err) {console.log("connected correctly to database")};
});