const services = angular.module('users.services', [])
  .service('usersService', require('./users.service.js'));

const controllers = angular.module('users.controllers', [])
  .controller('usersController', require('./users.controller.js'));

const routes = angular.module('users.routes', [])
  .config(require('./users.routes'));

module.exports = { services, controllers, routes };
