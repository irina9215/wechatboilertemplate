'use strict';

module.exports = function WelcomeCtrl($state, $log, $scope) {
  // const vm = this;
  // vm.property = 'My Controller Property';

  var welcomeCtrl = this;
  $scope.title = 'welcome title';

  welcomeCtrl.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  $log.info('welcomeCtrl here');

  welcomeCtrl.next = function() {
    $state.go('form');
  };
};
