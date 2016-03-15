/**
 * Created by johnwilson on 3/14/16.
 */
(function() {
  'use strict';

  angular
    .module('abookApp')
    .controller('EditCtrl', EditCtrl);

  EditCtrl.$inject = ['addressService','$stateParams','$state'];

  function EditCtrl(addressService,$stateParams,$state) {
    var childVm = this;
    childVm.result=$stateParams.results;
    childVm.formModel = {
      'apikey':'c11879a4-fdac-4759-98f6-3544b3ff26fa',
      'address':childVm.result.address,
      'email':childVm.result.email,
      'city':childVm.result.city,
      'state':childVm.result.state,
      'zipcode':childVm.result.zipcode || " ",
      'firstName':childVm.result.firstName,
      'lastName':childVm.result.lastName,
      'phone':childVm.result.phone,
      'id':childVm.result.id
    };


    childVm.updateUser = function(data){
      console.log("data passed tp", data);
      addressService.updateUser(data)
        .then(function(data){
          console.log(data);
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
