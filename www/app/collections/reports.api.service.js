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

      if(Meteor.status().connected){
        Meteor.call('newReport', reportBody, function(error, result){
          if(error){
            deferred.reject("Application Error: Unable to collect report. Please send a bug report.");
          }else{
            deferred.resolve(result);
          }
        });
      }else{
        deferred.reject("Error: Unable to connect to server. Please check your connection.");
      }
      return deferred.promise;
    }
  }
})();
