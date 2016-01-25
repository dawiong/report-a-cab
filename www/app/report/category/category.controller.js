(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CategoryController', CategoryController);

  function CategoryController($state, categoriesCollService, reportService) {
    var vm = this;

    vm.categories = {};
    vm.setCategory = setCategory;
    vm.reportBody = reportService.reportBody;

    init();

    function init(){
      loadCategories();
    }

    function setCategory(categoryCode){
      vm.reportBody.category_code = categoryCode;
    }

    function loadCategories() {
      vm.categories = categoriesCollService.getCategories();
    }
  }
})();
