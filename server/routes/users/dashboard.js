var userDashCtrl = require('../../controllers/user/dashboard');
module.exports = function(app) {
    app.get('/user/dashboard', userDashCtrl.dashboard);
}
