angular.module('ionicApp')
	.controller('CountdownCtrl', function($scope, $timeout) {
		// Shouldn't hardcode this - put on firebase? Maybe a static file on Github
		var date = new Date(2014, 12, 12);

		var recalculateCountdown = function() {


			$timeout(recalculateCountdown, 1000);
		};


	});