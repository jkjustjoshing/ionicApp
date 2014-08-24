angular.module('ionicApp')
	.controller('SigninCtrl', function($scope, $state, User, BarcodeScanner) {

	$scope.inviteNumber = '{"u":"foo","p":"bar"}';
		$scope.authenticate = function(value) {
			console.log(value)
			User.logIn(value).then(function(success) {
				$state.go('mainApp.rsvp');
			}, function(err) {
				console.warn(err)
			});
		};

	});