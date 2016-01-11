(function() {
  'use strict';

  angular
  .module('app.collections')
  .service('categoriesCollService', categoriesCollService);

  function categoriesCollService($q) {
    var service = this;

    service.categories = new Mongo.Collection('categories');
    service.getCategories = getCategories;

    function getCategories() {
      var deferred = $q.defer();

      var categories = service.categories.find().fetch();
      if(categories){
        deferred.resolve(categories);
      }else{
        deferred.reject("Error: Unable to collect categories");
      }

      return deferred.promise;
    }
  }
})();
