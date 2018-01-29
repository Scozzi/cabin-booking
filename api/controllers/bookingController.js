/**
* bookingController.js
*/
var mongoose = require('mongoose');

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

var Booking = require('../models/booking');
var User = require('../models/user');

let GUEST = new User({
	username: 			"GUEST",
	password: 			"default",
	userPermissions:    "GUEST",
	userType:           "GUEST",
	firstName: 			"GUEST",
	lastName: 			"GUEST",  
	createdAt: 			{ type: Date, default: Date.now },
	displayName: 		"GUEST",
	bio: 				"GUEST"
})

// CREATE A NEW USER
router.post('/', function(req, res) {
	Booking.create({
		arriveDate:         req.body.arriveDate,
		leaveDate: 			req.body.leaveDate,
		bookingUser:        GUEST,  		   // req.locals.currentUser
		attendingUsers:     [ GUEST, GUEST ],  // req.body.additionalGuests
	},
	function (err, booking) {
		if (err) {
			console.log(err)
			return 
			res.status(500)
			.send("There was a problem adding the booking to the database.");
		}
		res.status(200).send(booking);
	});
});

// FIND ALL BOOKINGS
router.get('/', function(req, res) {
	Booking.find({}, function(err, bookings) {
		if (err) {
			return res.status(500)
			.send("No bookings were found in the database");
		}
		res.status(200).send(bookings);
	});
})

// FIND BOOKINGS BY BOOKING USER
router.get('/for/:username', function(req, res) {
	Booking.find({
		bookingUser : { username : req.params.username }
	}, function(err, bookings) {
		if (err) {
			return res.status(500)
			.send("No bookings were found in database for user : " + req.params.username );
		}
		res.status(200).send(bookings);
	})
})

// FIND BOOKINGS BY DATESPAN SLICE
router.get('/range/:startSlice/:endSlice', function(req, res) {
	Booking.find({
		arriveDate : {
			$gte: 	req.params.startSlice,
        	$lt: 	req.params.endSlice
		},
		leaveDate : {
			$gte: 	req.params.startSlice,
        	$lt: 	req.params.endSlice
		}
	}, function(err, bookings) {
		if (err) {
			return res.status(500)
			.send("No bookings were found between " + req.params.startSlice + " and " + req.params.endSlice + ". Sorry.");
		}
		res.status(200).send(bookings);
	})
})

module.exports = router;
