angular.module('ionicApp')
	.controller('RsvpCtrl', function($scope, User) {

    User.getInfo().then(function(info) {
      $scope.info = info;
    });

	});