angular.module('ionicApp')
	.controller('SigninCtrl', function($scope, $state, User, BarcodeScanner) {
		

		$scope.authenticate = function(value) {
			if(!value) {
				value = $scope.inviteNumber
			}

			User.logIn(value).then(function(success) {
				if(success) {
					$state.go('mainApp.imageFeed');
				}
			});
				
		};

		$scope.scanBarcode = function() {
			BarcodeScanner.scan().then(function(result) {
				console.log(result)
				$scope.authenticate(result.text);
			});
		}

	});