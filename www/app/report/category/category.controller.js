(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CategoryController', CategoryController);

  function CategoryController($state, categoriesCollService, reportService) {
    var vm = this;

    vm.categories = {};
    vm.setCategory = setCategory;

    init();

    function init(){
      loadCategories();
    }

    function setCategory(categoryCode){
      reportService.reportBody.category_code = categoryCode;
      reportService.submitReport().then(function(response){
        $state.go("report.results",{messageType:'success', message:response});
      },function(err){
        $state.go("report.results",{messageType:'error', message:err});
      });
    }

    function loadCategories() {
      vm.categories = categoriesCollService.getCategories();
    }
  }
})();
