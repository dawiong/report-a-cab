(function() {
  'use strict';

  angular
    .module('app')
    .config(stateConfig);

  function stateConfig($stateProvider, $urlRouterProvider){
    //set default path here
    $urlRouterProvider.otherwise('/report');
  }
})();
