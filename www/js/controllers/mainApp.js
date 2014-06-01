angular.module('ionicApp')
	.controller('MainAppCtrl', function($scope, User) {
		
		$scope.userInfo = User.getInfo();

	});