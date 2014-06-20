angular.module('ionicApp')
	.controller('ImageFeedCtrl', function($scope, Imgur, Camera, ImageShack, S3) {

		var PAGE_SIZE = 2;
		
		$scope.images = [];
		$scope.numberToDisplay = PAGE_SIZE;

		/*Imgur.getAlbum('481i7').then(function(data) {
			$scope.images = data.images;
		});

		$scope.loadMore = function() {
			$scope.numberToDisplay += PAGE_SIZE;
			$scope.$broadcast('scroll.infiniteScrollComplete');
		};

		$scope.endOfList = function() {
			return $scope.numberToDisplay >= $scope.images.length;
		};

		$scope.uploadImage = function() {
			Camera.cameraOrAlbum().then(function(imageUrl) {
				alert(imageUrl);
				console.log(imageUrl)
				$scope.uploadedImage = imageUrl;
				Imgur.upload(imageUrl);
			});
		};
*/
		S3.listObjects().then(S3.getUrl).then(function(urls) {
			$scope.urls = urls
		}, function(err) {
			console.log(err)
		});

	});