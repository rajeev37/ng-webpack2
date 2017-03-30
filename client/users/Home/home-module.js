import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './home-config.js';

import HomeComponent from './home-component/home-component';
import template from './home-component/home-component.pug';

export default angular
    .module('main.app.home', [uirouter])
    .config(routing)
    .component('homeComponent', { controller: HomeComponent, template })
    .name;
