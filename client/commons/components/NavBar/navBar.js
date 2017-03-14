module.exports = function(app) {
  app.component('navContent', {
    bindings: { },
    template: require('./navBar.html'),
    controller: function($scope) {
      $scope.message = 'test';
    }
  });
}
