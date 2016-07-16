const config = require('../config');

function usersService($http, $q) {
  'ngInject';
  return {
    fetch: () => {
      const deferred = $q.defer();
      $http.get(config.usersEndpoint)
        .then(
          res => deferred.resolve(angular.fromJson(res.data)),
          err => deferred.reject(err)
        );
      return deferred.promise;
    },

    findAll: (usersIds) => {
      const deferred = $q.defer();
      $http.get(`${config.api}findall`, { usersIds })
        .then(
          res => deferred.resolve(angular.fromJson(res.data)),
          err => deferred.reject(err)
        );
      return deferred.promise;
    },

    find: (userId) => {
      const deferred = $q.defer();
      $http.get(`${config.api}find`, { id: userId })
        .then(
          res => deferred.resolve(angular.fromJson(res.data)),
          err => deferred.reject(err)
        );
      return deferred.promise;
    },

    edit: (user) => {
      const deferred = $q.defer();
      $http.post(`${config.api}edit/${user.id}`, user)
        .then(
          res => deferred.resolve(angular.fromJson(res.data)),
          err => deferred.reject(err)
        );
      return deferred.promise;
    },

    remove: (user) => {
      const deferred = $q.defer();
      $http.post(`${config.api}remove/${user.id}`)
        .then(
          res => deferred.resolve(angular.fromJson(res.data)),
          err => deferred.reject(err)
        );
      return deferred.promise;
    },
  };
}

module.exports = usersService;
