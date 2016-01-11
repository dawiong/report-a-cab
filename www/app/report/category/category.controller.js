(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CategoryController', CategoryController);

  function CategoryController(reportsCollService) {
    var vm = this;
    vm.submitReport = submitReport;

    console.log(reportsCollService);
    function submitReport() {
      reportsCollService.submitReport().then(function(response){
        console.log("Test Submit: " + response);
      }, function(err){
        console.log("Test Submit: " + err);
      });
    }
  }
})();
