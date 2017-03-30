var User = require('../../schema/user').User;

exports.user = function(req, res) {
  var user = new User({name: 'Rajeev Thakur', place: 'Chandigarh'});
  user.save(function(err ) {
    if(err) {
      console.log('err', err);
    } else {
      console.log('saved!');
    }
  })
};
