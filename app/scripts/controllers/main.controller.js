(function() {
  'use strict';

  angular
    .module('abookApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['addressService','$state','$q'];

  function MainCtrl(addressService,$state, $q) {
    var addressVm = this;
    var store = [];
    var data={
      'apikey':'c11879a4-fdac-4759-98f6-3544b3ff26fa'
    };
    init(); //get initial data
    addressVm.users = [];
    addressVm.deleteUser=deleteUser; //delete the user
    addressVm.deleteUserList=deleteUserList;//delete the list of checked items
    addressVm.goListing = goListing; //go the view with the single view
    addressVm.goEditing= goEditing; //go to the the Edit mode of the current User
    addressVm.idStore = idStore; //storing the list of checked items in a array

    function init() {
      addressService
        .getAll()
        .then(function(data) {
          addressVm.users = data.result;
          console.log(data.result);
        }, function(error) {
          console.log(error);
        });
    }

    function goEditing(item){
      console.log("happening");
      $state.go("edit",{results: item});
      console.log(item);
    }

    function idStore(emp){
      emp.isChecked !== emp.isChecked;
      //console.log(emp);
      if(emp.isChecked) {
        store.push(emp.id);
      }
      else {
        store.splice(store.indexOf(emp.id),1);
      }
      console.log(store);
    }
    function goListing(item) {
      console.log("happening");
      $state.go("user",{results: item});
      console.log(item);
    }

    function deleteUserList(){
      var chain = $q.when();
      angular.forEach(store, function(item){
        chain = chain.then(function(){
          data = {
            id : item,
            'apikey':'c11879a4-fdac-4759-98f6-3544b3ff26fa'
          };
          console.log("data passed to the controller",data);
          addressService
            .deleteUser(data)
            .then(function(result){
            console.log(result);
          });
        });
        chain.then(function(){
          $state.go($state.current, {}, {reload: true});
        });
      });
    }
    function deleteUser(i){
      data.id=i;
      console.log(data);
      addressService
        .deleteUser(data)
        .then(function(){
          $state.go("home", {}, {reload: true});
        });

    }
    console.log('UserListController');
  }
})();
