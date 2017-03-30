var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: String,
  place: String
})

module.exports.User = User;
