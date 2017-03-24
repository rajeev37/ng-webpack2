module.exports = function(app) {
  app.directive('firstDirective', function() {
    //require('./first-directive.scss');
    return {
      restrict: 'E',
      scope: {},
      template: require('./first-directive.pug'),
      controllerAs: 'vm',
      controller: function() {
        var vm = this;
        vm.test = 'first Directive';
      }
    }
  })
}
