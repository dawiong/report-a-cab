(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CaptureController', CaptureController);

  function CaptureController($ionicScrollDelegate, imageService, reportService) {
    var vm = this;

    vm.openCamera = openCamera;
    vm.openGallery = openGallery;
    vm.hasPicture = false;
    vm.message = 'No Image Selected';

    function openGallery() {
      //for testing on desktop, assume has picture already
      if (window.cordova) {
        // running on device/emulator
        imageService.getGallery().then(function(imageSource) {
          var image = document.getElementById('myImage');
          image.src = imageSource;
          reportService.reportBody.images.push(imageSource);
          vm.hasPicture = true;
        }, function(error) {
          vm.message = error;
        });
      } else {
        // running in dev mode
        vm.hasPicture = true;
      }  

    }

    function openCamera() {
      imageService.getCamera().then(function(imageSource) {
        var image = document.getElementById('myImage');
        image.src = imageSource;
        reportService.reportBody.images.push(imageSource);
        vm.hasPicture = true;
      }, function(error) {
        vm.message = error;
      });
    }
  }
})();
