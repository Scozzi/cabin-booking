/**
* A Schema describing an object that describes the relationship between the cabins
* Occupancy and what friend or family member (user) is curently occupying it
*/

var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
	arriveDate:         { type: Date, default: Date.now },
	leaveDate: 			{ type: Date, default: Date.now },
	bookingUser:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	attendingUsers:     [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
});

// bookingSchema.pre("save", function(done) {
// 	var booking = this;
// });

// userSchema.methods.checkPassword = function(guess, done) {
// 	bcrypt.compare(guess, this.password, function(err, isMatch) {
// 		done(err, isMatch);
// 	});
// };

bookingSchema.methods.checkConfirmation = function() {
	// check they have confirmed by email they will be using the cabin.
};

bookingSchema.virtual('daysOfStay').get(function () {
  return this.leaveDate - this.arriveDate;
});

bookingSchema.virtual('bookingUserCost').get(function () {
	return calculateUserCost(this.bookingUser);
});

bookingSchema.virtual('additionalGuestsCost').get(function () {
	let guestCost = 0;
	this.attendingUsers.forEach(function(user) {
		guestCost += calculateUserCost(user)
	});
	return guestCost;
});

bookingSchema.virtual('costPerNight').get(function () {
	return this.bookingUserCost + this.additionalGuestsCost;
});

bookingSchema.virtual('totalCharged').get(function () {
	return this.costPerNight * this.daysOfStay;
})

function calculateUserCost(User) {
	let userType = User.userType;
	switch(userType) {
		case 'family':
			return 15;
		case 'friend':
		case 'guest':
		default:
			return 30;
	}
}

var Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

