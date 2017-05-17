'use strict';

require('angular');

var template = require('./terms.html');
var TermsCtrl = require('./terms.ctrl');

angular.module('baseForm.terms', [])
  .controller('TermsCtrl', TermsCtrl)
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('terms', {
        url: '/terms',
        template: template,
        controller: 'TermsCtrl',
        controllerAs: 'TermsCtrl'
      });
    }
  ]);
