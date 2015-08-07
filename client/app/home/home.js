'use strict';

angular.module('ngExample')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });
  });
