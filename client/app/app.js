'use strict';

angular.module('ngExample', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
  	debugger
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
