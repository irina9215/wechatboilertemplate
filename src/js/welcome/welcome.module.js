'use strict';

require('angular');

var template = require('./welcome.html');
var WelcomeCtrl = require('./welcome.ctrl');

var welcome = angular.module('baseForm.welcome', [])
  .controller('WelcomeCtrl', WelcomeCtrl)
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('welcome', {
        url: '/welcome',
        template: template,
        controller: 'WelcomeCtrl',
        controllerAs: 'welcomeCtrl'
      });
    }
  ])
  .name;

module.exports = welcome;
