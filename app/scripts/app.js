(function(){
'use strict';

/**
 * @ngdoc overview
 * @name potatoApp
 * @description
 * # potatoApp
 *
 * Main module of the application.
 */
angular
  .module('abookApp', [
    'angular-loading-bar',
    'ui.router',
    'ui.gravatar',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url:'/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs:'addressVm'
      })
      .state('child',{
        url:'/child',
        templateUrl: 'views/child.html',
        controller:'ChildCtrl',
        controllerAs:'childVm',
        params: {
          results: ''
        }
      })
      .state('user',{
        url:"/user",
        templateUrl:"views/user.html",
        controller:'UserCtrl',
        controllerAs:'userVm',
        params: {
          results: ''
        }
      })
      .state('success',{
        url:'/success',
        templateUrl:'views/form.success.html'
      })
      .state('edit',{
        url:"/edit",
        templateUrl:'views/edit.form.html',
        controller: 'EditCtrl',
        controllerAs: 'editVm',
        params: {
          results: ''
        }
      });

    $urlRouterProvider.otherwise('/home');
  }]);




})();

