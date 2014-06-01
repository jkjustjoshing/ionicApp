angular.module('ionicApp')
	.controller('SigninCtrl', function($scope, $state, User) {
		

		$scope.authenticate = function() {
			if(User.logIn($scope.inviteNumber)) {
				$state.go('mainApp.lorem');
			}
		};

	});