(function() {
  'use strict';

  angular
  .module('app.report')
  .service('reportService', reportService);

  function reportService($q, reportsApiService) {
    var service = this;

    service.reportBody = {
      reported_by: 'user',
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

    service.submitReport = submitReport;

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
