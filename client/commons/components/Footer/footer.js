module.exports = function(app) {
  app.component('footerContent', {
    bindings: { },
    template: require('./footer.html'),
    controller: function($scope) {
      $scope.message = 'footer content';
    }
  });
}
