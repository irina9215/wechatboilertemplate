'use strict';

module.exports = function SuccessCtrl($state) {
  var successCtrl = this;

  successCtrl.back = function() {
    $state.go('welcome');
  };
};
