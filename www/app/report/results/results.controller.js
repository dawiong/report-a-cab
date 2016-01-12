(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('ResultsController', ResultsController);

  function ResultsController($stateParams) {
    var vm = this;

console.log($stateParams);
    vm.messageType = $stateParams.messageType;
    vm.message = $stateParams.message;
    console.log(vm.messageType);
    console.log(vm.message);
  }
})();
