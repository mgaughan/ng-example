'use strict';

angular.module('ngExample')
  .controller('HomeCtrl', function () {

    var vm = this;
    console.log('something')

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
