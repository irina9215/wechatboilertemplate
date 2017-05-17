'use strict';

require('angular');

var template = require('ng-cache!./home.html');
var HomeCtrl = require('./home.ctrl');

angular.module('baseForm.home', [])
  .controller('HomeCtrl', HomeCtrl)
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/home',
        template: template,
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      });
    }
  ]);
