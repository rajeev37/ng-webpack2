import angular from 'angular';
import uiRouter from 'angular-ui-router';
window.$ = window.jQuery = require('jquery');
require('./app.scss');
//require('../node_modules/jquery-slim/dist/jquery.slim.js');
require('../node_modules/tether/dist/js/tether.min.js');
require('../node_modules/bootstrap/dist/js/bootstrap.js');

//require('angular-ui-bootstrap');
import { ctrl } from './components/index';


const app = angular.module('app', [ uiRouter ]);
require('./commons/components')(app);
require('./commons/directives')(app);
//require('./commons/services')(app);

app.config( ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./components/Home/home.pug'),
        controller: ctrl.homeController
      })
      .state('about', {
        url: '/about',
        template: require('./components/About/about.pug'),
        controller: ctrl.aboutController
      })
       $locationProvider.html5Mode(false);
});

export default app;
