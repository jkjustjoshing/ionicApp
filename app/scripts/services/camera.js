angular.module('ionicApp')  
  .factory('Camera', function($q, $rootScope, $ionicActionSheet) {

    var token, info;

    return {
      cameraOrAlbum: function() {

      	var deferred = $q.defer();

      	// Show the action sheet
			  $ionicActionSheet.show({
			    buttons: [
			      {
			      	text: 'Take a Photo',
			      	sourceType: Camera.PictureSourceType.CAMERA
			      },
			      {
			      	text: 'Choose a Photo',
			      	sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
			      },
			    ],
			    titleText: 'Upload a Photo',
			    cancelText: 'Cancel',
			    buttonClicked: function(index, buttonObj) {
			      navigator.camera.getPicture(function(imageUrl) {
			      		$rootScope.$apply(function() {
			      			deferred.resolve(imageUrl);
			      		});
			      	}, function() {
			      		$rootScope.$apply(function() {
			      			deferred.reject();
			      		});
			      	}, {
				      	quality: 80, 
	    					destinationType: Camera.DestinationType.FILE_URI,
	    					sourceType: buttonObj.sourceType,
	    					encodingType: Camera.EncodingType.JPEG
    					}); 
			      return true;
			    },
			    cancel: function() {
			    	$rootScope.$apply(function() {
			    		deferred.reject();
			    	});
			    }
			  });

		    return deferred.promise;

      }
    }
  });
