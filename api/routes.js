/** 
*		
* 	API v1.0.0
*	Author: Weston E. Jones
*
*   TODO: Routes for User CRUD
*	TODO: Routes for Booking CRUD
*	TODO: Establish route Orginization -- Admin && Api ?
*	TODO: Setup Logging
*
*/
var versionNumber = "v1.0.0"

var express = require('express');

var api = express.Router();

// api.use(function(req, res, next) {
// 	res.locals.currentUser = req.user;
// 	console.log(req.user);
// });

var UserController = require('./controllers/userController');
api.use('/users', UserController);

var BookingController = require('./controllers/bookingController');
api.use('/booking', BookingController);

// api.get("/", function(req, res, next) {
// 	User.find()
// 		.sort({ createdAt: "descending" })
// 		.exec(function(err, users) {
// 			if (err) { return next(err); }
// 			res.render("index", { users: users });
// 		});
// });

api.get("/test", function(req, res) {
	res.send("The API version : " + versionNumber + " : is live and responding");
});

module.exports = api;