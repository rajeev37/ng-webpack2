// 3rd party modules
import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';

// Modules
import app from './app/app.module';
//import common from './common/common.module';
import home from './users/Home/home-module';
import about from './users/About/about-module';

angular.module('main', [
    angularUiBootstrap, app, home, about
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
