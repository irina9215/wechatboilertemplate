'use strict';

require('angular');

var template = require('./form.html');
var FormCtrl = require('./form.ctrl');

angular.module('baseForm.form', [])
  .controller('FormCtrl', FormCtrl)
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('form', {
        url: '/form',
        template: template,
        controller: 'FormCtrl',
        controllerAs: 'formCtrl'
      });
    }
  ]);
