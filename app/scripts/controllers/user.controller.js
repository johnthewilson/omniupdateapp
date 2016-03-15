/**
 * Created by johnwilson on 3/14/16.
 */
(function() {
  'use strict';

  angular
    .module('abookApp')
    .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$stateParams'];

  function UserCtrl($stateParams) {
    var userVm=this;
    userVm.result = $stateParams.results;
  }
})();
