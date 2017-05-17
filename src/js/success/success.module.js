'use strict';

require('angular');

var template = require('./success.html');
var SuccessCtrl = require('./success.ctrl');

angular.module('baseForm.success', [])
  .controller('SuccessCtrl', SuccessCtrl)
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('success', {
        url: '/success',
        template: template,
        controller: 'SuccessCtrl',
        controllerAs: 'successCtrl'
      });
    }
  ]);

