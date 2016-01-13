(function() {
  'use strict';

  angular
  .module('app.collections')
  .service('reportsApiService', reportsApiService);

  function reportsApiService($q) {
    var service = this;

    service.submitReport = submitReport;

    function submitReport(reportBody) {
      var deferred = $q.defer();

      Meteor.call('newReport', reportBody, function(error, result){
        if(error){
          deferred.reject("Error: Unable to collect report");
        }else{
          deferred.resolve(result);
        }
      });
      return deferred.promise;
    }
  }
})();
