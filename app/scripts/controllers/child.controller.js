(function() {
  'use strict';

  angular
    .module('abookApp')
    .controller('ChildCtrl', ChildCtrl);

  ChildCtrl.$inject = ['addressService','$state','$scope'];

  function ChildCtrl(addressService,$state,$scope) {
    var childVm = this;

    childVm.formModel = {
      'apikey':'c11879a4-fdac-4759-98f6-3544b3ff26fa'
    };


    childVm.addUser = function(data){
      addressService.addUser(data)
        .then(function(){
          $state.go("success", {}, {reload: true});
          childVm.formModel = {
            'apikey':'c11879a4-fdac-4759-98f6-3544b3ff26fa'
          };

        });
      console.log(data);
    };


    console.log('Child Controller');
  }
})();
