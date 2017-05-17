// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

require('angular');
require('angular-mocks/angular-mocks');

const context = require.context('./', true, /\.spec.js$/);

context.keys().forEach(context);