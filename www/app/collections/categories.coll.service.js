(function() {
  'use strict';

  angular
  .module('app.collections')
  .service('categoriesCollService', categoriesCollService);

  function categoriesCollService($q) {
    var service = this;

    service.getCategories = getCategories;

    //static listing
    service.categories = [
      {
        code: 'REFUSED_BOARDING',
        title: 'Refused Boarding'
      },
      {
        code: 'CONTRACTING',
        title: 'Contracting'
      },
      {
        code: 'OVER_CHARGING',
        title: 'Over-charging'
      },
      {
        code: 'BAD_BEHAVIOR',
        title: 'Rude Behavior'
      },
      {
        code: 'METER_PROBLEM',
        title: 'Defective Meter'
      },
      {
        code: 'RECKLESS_DRIVING',
        title: 'Reckless Driving'
      }
    ];

    function getCategories() {
      return service.categories;
    }
  }
})();
