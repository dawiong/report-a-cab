(function() {
  'use strict';

  angular
  .module('app.common')
  .service('imageService', imageService);

  function imageService($q, $cordovaCamera, $cordovaImagePicker) {
    var service = this;
    service.getCamera = getCamera;
    service.getGallery = getGallery;

    //returns usable img src
    function getCamera(targetWidth, targetHeight) {
      var deferred = $q.defer();

      ionic.Platform.ready(function() {
        var options = {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 720,
          targetHeight: 720,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };

        if(targetWidth && targetHeight){
          options.targetWidth = targetWidth;
          options.targetHeight = targetHeight;
        }

        $cordovaCamera.getPicture(options).then(function(imageData){
          deferred.resolve("data:image/jpeg;base64," + imageData);
        },
        function(err){
          deferred.reject("ERROR: Cannot open camera.");
        });
      });

      return deferred.promise;
    }

    //returns usable img src
    function getGallery(targetWidth, targetHeight){
      var deferred = $q.defer();

      /*
      ionic.Platform.ready(function() {
        var options = {
          maximumImagesCount: 1,
          width: 400,
          height: 400,
          quality: 80
        };

        if(targetWidth && targetHeight){
          options.targetWidth = targetWidth;
          options.targetHeight = targetHeight;
        }

        $cordovaImagePicker.getPictures(options).then(function(results){
          if(results[0]){
            deferred.resolve(results[0]);
          }else{
            deferred.reject("No Image Selected");
          }
        },
        function(err){
          deferred.reject("ERROR: Cannot open gallery.");
        });
      });*/

      ionic.Platform.ready(function() {
        var options = {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 720,
          targetHeight: 720,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };

        if(targetWidth && targetHeight){
          options.targetWidth = targetWidth;
          options.targetHeight = targetHeight;
        }

        $cordovaCamera.getPicture(options).then(function(imageData){
          deferred.resolve("data:image/jpeg;base64," + imageData);
        },
        function(err){
          deferred.reject("ERROR: Cannot open gallery.");
        });
      });

      return deferred.promise;
    }

  }
})();
