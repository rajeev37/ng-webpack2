module.exports = function(app) {
  require('./admin')(app);
  require('./users')(app);
  require('./superAdmin')(app);
};
