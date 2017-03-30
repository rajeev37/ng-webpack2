module.exports = function(app) {
    require('./user')(app);
    require('./dashboard')(app);
}
