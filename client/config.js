import angular from 'angular';
import uiRouter from 'angular-ui-router';
require('angular-ui-bootstrap');
import { ctrl } from './components/index';


const app = angular.module('app', [uiRouter, 'ui.bootstrap']);
require('./commons/components')(app);
require('./commons/directives')(app);
//require('./commons/services')(app);

app.config( ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./components/Home/home.html'),
        controller: ctrl.homeController
      })
      .state('about', {
        url: '/about',
        template: require('./components/About/about.html'),
        controller: ctrl.aboutController
      })
       $locationProvider.html5Mode(false);
});

export default app;
