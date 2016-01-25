(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('DetailsController', DetailsController);

  function DetailsController($state, reportService) {
    var vm = this;

    vm.reportBody = reportService.reportBody;
    vm.submit = submit;

    function submit() {
      reportService.submitReport().then(function(response){
        $state.go("report.results",{messageType:'update-success', message:response});
      },function(err){
        $state.go("report.results",{messageType:'error', message:'Unable to submit your report. Please try again later.'});
      });
    }
  }
})();
