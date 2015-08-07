'use strict';

angular.module('ngExample')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });
  });
