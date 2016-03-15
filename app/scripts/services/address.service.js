/**
 * Created by johnwilson on 3/13/16.
 */
(function() {
  'use strict';

  angular
    .module('abookApp')
    .factory('addressService', addressService);

  addressService.$inject = ['$http', '$q'];

  function addressService($http, $q) {


    var apikey="c11879a4-fdac-4759-98f6-3544b3ff26fa";
      return {
        getAll: function () {
          var defer = $q.defer();

          $http
            .get("http://front-end.oudemo.com/api/address/list/?apikey=" + apikey)
            .then(function (response) {
              defer.resolve(response.data);
            }, function (error) {
              defer.reject(error.status);
            });
          return defer.promise;
        },

        getUserById: function (id) {
          var defer = $q.defer();
          $http
            .get('http://front-end.oudemo.com/api/address/list/?apikey=' + apikey + "?id=" + id)
            .then(function (response) {
              defer.resolve(response.data);
            }, function (error) {
              defer.reject(error.status);
            });
          return defer.promise;
        },

        addUser: function (body) {
          var defer = $q.defer();
          $http
            .post('http://front-end.oudemo.com/api/address/new/?apikey=' + apikey, body)
            .then(function (response) {
              defer.resolve(response);
            }, function (error) {
              defer.reject(error);
            });
          return defer.promise;
        },
        updateUser: function (body) {
          var defer = $q.defer();
          $http
            .post('http://front-end.oudemo.com/api/address/update/?apikey=' + apikey, body)
            .then(function (response) {
              defer.resolve(response);
            }, function (error) {
              defer.reject(error);
            });
          return defer.promise;
        },
        deleteUser: function (id) {
          var defer = $q.defer();
          $http
            .post('http://front-end.oudemo.com/api/address/delete/?apikey=' + apikey, id)
            .then(function (response) {
              defer.resolve(response);
            }, function (error) {
              defer.reject(error);
            });
          return defer.promise;
        }
      };
  }
})();
