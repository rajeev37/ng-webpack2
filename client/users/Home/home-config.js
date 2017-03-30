export function routing($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            template: '<home-component></home-component>'
        });
}
