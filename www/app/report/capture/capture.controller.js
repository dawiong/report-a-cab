(function() {
  'use strict';

  angular
  .module('app.report')
  .controller('CaptureController', CaptureController);

  function CaptureController($ionicScrollDelegate, imageService) {
    var vm = this;

    vm.openCamera = openCamera;
    vm.openGallery = openGallery;
    vm.hasPicture = false;
    vm.message = 'No Image Selected';

    function openGallery() {
      imageService.getGallery(300,300).then(function(imageSource) {
        var image = document.getElementById('myImage');
        image.src = imageSource;
        vm.hasPicture = true;
      }, function(error) {
        vm.message = error;
      });
    }

    function openCamera() {
      imageService.getCamera(300,300).then(function(imageSource) {
        var image = document.getElementById('myImage');
        image.src = imageSource;
        vm.hasPicture = true;
      }, function(error) {
        vm.message = error;
      });
    }
  }
})();
