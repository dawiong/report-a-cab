(function() {
  'use strict';

  angular
  .module('app.report')
  .service('reportService', reportService);

  function reportService($q, reportsCollService) {
    var service = this;

    service.reportBody = {
      reported_by: 'user',
      category_id: '',
      images: [],
      plate_number: '',
      operator_name: '',
      title: '',
      description: ''
    };

    service.submitReport = submitReport;

    function submitReport() {
      var deferred = $q.defer();

      reportsCollService.submitReport(service.reportBody).then(function(response){
        console.log("Submit Success! ~" + response);
        deferred.resolve(response);
      }, function(err){
        console.log("Submit Fail: " + err);
        deferred.reject(err);
      });

      return deferred.promise;
    }
  }
})();
