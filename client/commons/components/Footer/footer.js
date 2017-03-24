module.exports = function(app) {
  app.component('footerContent', {
    bindings: { },
    template: require('./footer.pug'),
    controller: function($scope) {
      $scope.message = 'footer content';
    }
  });
}
