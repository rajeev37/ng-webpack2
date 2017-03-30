var superAdminDashCtrl = require('../../controllers/superAdmin/dashboard');
module.exports = function(app) {
    app.get('/super-admin/dashboard', superAdminDashCtrl.dashboard);
}
