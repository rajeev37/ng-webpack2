var adminDashCtrl = require('../../controllers/admin/dashboard');
module.exports = function(app) {
    app.get('/admin/dashboard', adminDashCtrl.dashboard);
}
