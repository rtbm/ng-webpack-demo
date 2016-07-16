function usersRoutes($stateProvider) {
  'ngInject';
  return $stateProvider
    .state('users', {
      url: '',
      template: require('./users.html'),
      controller: 'usersController',
      controllerAs: 'usersCtrlVM',
    });
}

module.exports = usersRoutes;
