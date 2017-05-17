'use strict';

module.exports = function HomeCtrl($state, $log) {
  // const vm = this;
  // vm.property = 'My Controller Property';

  var homeCtrl = this;

  $log.info('homeCtrl here');

  homeCtrl.next = function() {
    $state.go('form');
  };
};
