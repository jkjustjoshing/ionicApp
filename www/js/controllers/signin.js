angular.module('ionicApp')
	.controller('SigninCtrl', function($scope, $state, User, BarcodeScanner) {
		
	$scope.inviteNumber = '{"u":"foo","p":"bar"}';
		$scope.authenticate = function(value) {
			console.log(value)
			User.logIn(value).then(function(success) {
				$state.go('mainApp.imageFeed');
			}, function(err) {
				console.warn(err)
			});
		};

		$scope.scanBarcode = function() {
			BarcodeScanner.scan().then(function(result) {
				console.log(result)
				$scope.authenticate(result.text);
			});
		}

	});