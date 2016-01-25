
(function() {
  'use strict';

  angular
    .module('app.report')
    .config(stateConfig);

  function stateConfig($stateProvider, $urlRouterProvider){
    $stateProvider.state('report', {
      abstract: 'true',
      url: '/report',
      views: {
        main: {
          templateUrl: 'app/report/report.template.html'
        }
      }
    })
    .state('report.capture', {
      url: '',
      views: {
        content: {
          templateUrl: 'app/report/capture/capture.template.html',
          controller: 'CaptureController as vm'
        }
      }
    })
    .state('report.category', {
      url: '',
      views: {
        content: {
          templateUrl: 'app/report/category/category.template.html',
          controller: 'CategoryController as vm'
        }
      }
    })
    .state('report.details', {
      url: '',
      views: {
        content: {
          templateUrl: 'app/report/details/details.template.html',
          controller: 'DetailsController as vm'
        }
      }
    })
    .state('report.presubmit', {
      url: '',
      views: {
        content: {
          templateUrl: 'app/report/presubmit/presubmit.template.html',
          controller: 'PreSubmitController as vm'
        }
      }
    })
    .state('report.results', {
      url: '',
      params:{
         messageType: 'error',
         message: 'Action Failed.'
      },
      views: {
        content: {
          templateUrl: 'app/report/results/results.template.html',
          controller: 'ResultsController as vm'
        }
      }
    });
  }
})();
