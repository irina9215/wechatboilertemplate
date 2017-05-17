var app = require('./app.js');

describe('base', function() {

  describe('base ctrl', function() {

    it('should be instantiable', function () {

        // module('baseForm');
        angular.mock.module(app);

        var scope = {};
        var ctrl;

        angular.mock.inject(function($controller) {
          ctrl = $controller('LogController', {$scope: scope});
        });

        expect(scope.title).toBeDefined();

    });

  });

});

