require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');
require('angular');
require('angular-ui-router');

const users = require('./users');

angular.module('myApp', [
  'ui.router',
  users.services.name,
  users.controllers.name,
  users.routes.name,
]);
