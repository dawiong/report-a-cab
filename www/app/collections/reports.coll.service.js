(function() {
  'use strict';

  angular
  .module('app.collections')
  .service('reportsCollService', reportsCollService);

  function reportsCollService($q) {
    var service = this;

    service.reports = new Mongo.Collection('reports');
    service.submitReport = submitReport;

    function submitReport() {
      var deferred = $q.defer();

      var reportId = service.reports.insert({
        title:'Test Insert ' + (new Date()).toString(),
        reporter:'Dawi'
      });
      if(reportId){
        deferred.resolve(reportId);
      }else{
        deferred.reject("Error: Unable to collect report");
      }

      return deferred.promise;
    }
  }
})();
