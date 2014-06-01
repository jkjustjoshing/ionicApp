angular.module('ionicApp')
	.controller('SigninCtrl', function($scope, $state) {
		$scope.authenticate = function() {
			$state.go('mainApp.lorem')
		}
	});