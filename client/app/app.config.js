export function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
