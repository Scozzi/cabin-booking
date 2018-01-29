/**
* userController.js
*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

var User = require('../models/user');

// CREATE A NEW USER
router.post('/', function(req, res) {
	User.create({
		username: 			req.body.username,
		password: 			req.body.password,
		userPermissions:    req.body.permissionsList,
		firstName:          req.body.firstName,
		lastName:         	req.body.lastName,
		displayName: 		req.body.displayName,
		bio:                req.body.bio
	},
	function (err, user) {
		if (err) {
			console.log(err)
			return 
			res.status(500)
			.send("There was a problem adding the user to the database.");
		}
		res.status(200).send(user);
	});
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			return res.status(500)
			.send("No users were found in the database");
		}
		res.status(200).send(users);
	});
});

// Retrieve information for user.
router.get('/:username', function(req, res) {
	User.find({ username: req.params.username}, function(err, user) {
		if (err) {
			return res.status(500)
			.send("User " + req.params.username + " not found in the database");
		}
		res.status(200).send(user);
	})
});

// Check password, should this be GET??
router.get('/:username/validate-login/:attemptedpass', function(req, res) {
	User.findOne( { username: req.params.username }, function(err, user) {
		if (err) {
			return res.status(500)
			.send("User " + req.params.username + " not found in the database");
		} else {
			user.checkPassword(req.params.attemptedpass, function(err, isMatch) {
				if (err) {
					return res.status(503)
					.send("Password doesn't match for user " + req.params.username + ". Try again.");
				} else {
					res.status(200).send(isMatch);
					// Increment failed attempts.  Once five offer password reset workflow.
				}
			});
		}

	})
})

module.exports = router;

