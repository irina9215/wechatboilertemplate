var app = require('./../../app.js');
var welcome = require('./welcome.module.js');

describe('welcome', function() {

  describe('welcome ctrl', function() {


    it('should be instantiable', function () {

        angular.mock.module(app);
        angular.mock.module(welcome);

        var scope = {};
        var ctrl;

        angular.mock.inject(function($controller) {
          ctrl = $controller('WelcomeCtrl', {$scope: scope});
        });

        expect(scope.title).toBeDefined();

    });

  });

});

