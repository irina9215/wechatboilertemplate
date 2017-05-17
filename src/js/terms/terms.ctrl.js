'use strict';

module.exports = function TermsCtrl($state, $log) {
  var termsCtrl = this;

  termsCtrl.accept = function() {
    $state.go('form');
    $log.log('accept');
  };

  termsCtrl.discard = function() {
    $state.go('form');
  };
};
