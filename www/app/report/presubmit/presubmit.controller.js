(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('PreSubmitController', PreSubmitController);

  function PreSubmitController($state, reportService) {
    var vm = this;

    vm.submit = submit;

    function submit() {
      reportService.submitReport().then(function(response){
        $state.go("report.results",{messageType:'success', message:response});
      },function(err){
        $state.go("report.results",{messageType:'error', message:'Unable to submit your report. Please try again later.'});
      });
    }
  }
})();
