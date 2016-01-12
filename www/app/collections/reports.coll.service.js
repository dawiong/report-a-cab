(function() {
  'use strict';

  angular
  .module('app.collections')
  .service('reportsCollService', reportsCollService);

  function reportsCollService($q) {
    var service = this;

    service.reports = new Mongo.Collection('reports');
    service.submitReport = submitReport;

    function submitReport(reportBody) {
      var deferred = $q.defer();

      var reportId = service.reports.insert(reportBody);
      if(reportId){
        deferred.resolve(reportId);
      }else{
        deferred.reject("Error: Unable to collect report");
      }

      return deferred.promise;
    }
  }
})();
