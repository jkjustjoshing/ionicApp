angular.module('ionicApp')
	.controller('ImageFeedCtrl', function($scope, Imgur) {

		var PAGE_SIZE = 2;
		
		$scope.images = [];
		$scope.numberToDisplay = PAGE_SIZE;

		Imgur.getAlbum('481i7').then(function(data) {
			$scope.images = data.images;
		});

		$scope.loadMore = function() {
			$scope.numberToDisplay += PAGE_SIZE;
			$scope.$broadcast('scroll.infiniteScrollComplete');
		};

		$scope.endOfList = function() {
			return $scope.numberToDisplay >= $scope.images.length;
		};

	});