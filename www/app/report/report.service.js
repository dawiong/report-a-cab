(function() {
  'use strict';

  angular
  .module('app.report')
  .service('reportService', reportService);

  function reportService($q, reportsApiService) {
    var service = this;

    service.reportBody = {};
    service.submitReport = submitReport;
    service.reset = reset;

    init();

    function init(){
      reset();
    }

    function reset(){
      var reportTemplate = {
        reported_by: 'app',
        category_code: '',
        images: [],
        plate_number: '',
        operator_name: '',
        title: '',
        description: '',
        name: '',
        email: '',
        contact_number: '',
        address: ''
      };

      angular.copy(reportTemplate, service.reportBody);
    }

    function submitReport() {
      var deferred = $q.defer();
      var message = '';
      reportsApiService.submitReport(service.reportBody).then(function(response){
        message = "Your report has been recorded successfully.";
        deferred.resolve(message);
      }, function(err){
        message = err;
        deferred.reject(message);
      });

      return deferred.promise;
    }
  }
})();
