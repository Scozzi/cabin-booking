/**
* server.js
*/

var app = require('./app');

app.set("port", process.env.PORT || 9005);

var server = app.listen(app.get("port"), function() {
	console.log("Cabin Booking API launched on port " + app.get("port"));
	// Use Logger
});