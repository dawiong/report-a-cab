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
        $state.go("report.results",{messageType:'success', message:'Your report has been submitted. Please check your email for any updates.'});
      },function(err){
        $state.go("report.results",{messageType:'error', message:'Unable to submit your report. Please try again later.'});
      });
    }
  }
})();
