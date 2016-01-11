(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CategoryController', CategoryController);

  function CategoryController(reportsCollService, categoriesCollService) {
    var vm = this;

    vm.categories = {};
    vm.submitReport = submitReport;

    init();

    function init(){
      loadCategories();
    }

    function submitReport() {
      reportsCollService.submitReport().then(function(response){
        console.log("Test Submit: " + response);
      }, function(err){
        console.log("Test Submit: " + err);
      });
    }

    function loadCategories() {
      categoriesCollService.getCategories().then(function(response){
        vm.categories = response;
      }, function(err){
        console.log("Categories Loading Error: " + err);
      });
    }
  }
})();
