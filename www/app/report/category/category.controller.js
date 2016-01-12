(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CategoryController', CategoryController);

  function CategoryController(categoriesCollService, reportService) {
    var vm = this;

    vm.categories = {};
    vm.setCategory = setCategory;

    init();

    function init(){
      loadCategories();
    }

    function setCategory(categoryId){
      reportService.reportBody.category_id = categoryId;
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
