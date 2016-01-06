(function() {
'use strict';

angular
  .module('app.report')
  .controller('CaptureController', CaptureController);

function CaptureController($cordovaCamera, $cordovaImagePicker) {
  var vm = this;

  vm.openCamera = openCamera;
  vm.openGallery = openGallery;
  vm.hasPicture = false;

  activate();

  function activate() {
  }

  function openGallery() {
    var options = {
      maximumImagesCount: 1,
      width: 400,
      height: 400,
      quality: 80
    };

    ionic.Platform.ready(function() {
      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          /*for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
          }*/
          var image = document.getElementById('myImage');
          if(results[0]){
            image.src = results[0];
            vm.hasPicture = true;
          }
        }, function(error) {
          // error getting photos
        });
      });
  }

  function openCamera() {
    var options = {
      quality: 80,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
      //correctOrientation:true
    };

    ionic.Platform.ready(function() {
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
        vm.hasPicture = true;
      }, function(err) {
        // error
      });
    });
  }
}
})();
