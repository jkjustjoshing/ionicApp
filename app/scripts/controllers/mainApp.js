angular.module('ionicApp')
	.controller('MainAppCtrl', function($scope, User) {
		
		User.getInfo().then(function(info) {
			console.log(info)
			$scope.userInfo = info;
		});

	});