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
      console.log(reportService.reportBody);
      reportService.submitReport().then(function(response){
        $state.go("report.results",{messageType:'update-success', message:'Your report has been updated. We will email you for any updates on your request.'});
      },function(err){
        $state.go("report.results",{messageType:'error', message:'Unable to submit your report. Please try again later.'});
      });
    }
  }
})();
