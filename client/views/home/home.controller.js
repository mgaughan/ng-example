'use strict';

angular.module('ngExample')
  .controller('HomeCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
