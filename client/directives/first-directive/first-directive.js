module.exports = function(app) {
  app.directive('firstDirective', function() {
    require('./first-directive.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./first-directive.html'),
      controllerAs: 'vm',
      controller: function() {
        var vm = this;
        vm.test = 'first Directive';
      }
    }
  })
}
