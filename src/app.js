'use strict';

require('angular');
var uirouter = require('angular-ui-router');

require('./js/welcome/welcome.module'); // 'baseForm.welcome'
require('./js/form/form.module'); // 'baseForm.form'
require('./js/terms/terms.module'); // 'baseForm.terms'
require('./js/success/success.module'); // 'baseForm.success'

var app = angular.module('baseForm', [
  uirouter,
  'baseForm.welcome',
  'baseForm.form',
  'baseForm.terms',
  'baseForm.success'
]).controller('LogController', ['$log', '$scope', function($log, $scope) {
  $scope.title = 'This is an app title';
  $log.info('i am appjs');
}]).config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('welcome');
  }
])
.name;

module.exports = app;
