(function() {
  'use strict';

  angular
  .module('app.report')
  .service('reportsService', reportsService);

  function reportsService($q) {
    var service = this;

    service.reportBody = {};

  }
})();
