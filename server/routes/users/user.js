var userCtrl = require('../../controllers/user/user');
module.exports = function(app) {
    app.get('/user', userCtrl.user);
}
