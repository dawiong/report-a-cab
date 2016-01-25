(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('ResultsController', ResultsController);

  function ResultsController($state, $stateParams, reportService) {
    var vm = this;

    vm.messageType = $stateParams.messageType;
    vm.message = $stateParams.message;

    vm.finish = finish;

    function finish(){
      reportService.reset();
      $state.go("report.capture");
    }
  }
})();
