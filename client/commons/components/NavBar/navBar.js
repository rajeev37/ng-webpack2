module.exports = function(app) {
  app.component('navContent', {
    bindings: { },
    template: require('./navBar.pug'),
    controller: function($scope) {
      $scope.message = 'test';
    }
  });
}
