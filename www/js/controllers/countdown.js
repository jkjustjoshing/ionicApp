angular.module('ionicApp')
	.controller('CountdownCtrl', function($scope, $timeout, User) {
		// Shouldn't hardcode this - put on firebase? Maybe a static file on Github
		var date;

		User.getCountdown().then(function(val) {
			date = new Date(val);

			$scope.difference = moment(date).diff(moment(), 'days');


		});


		var recalculateCountdown = function() {


			$timeout(recalculateCountdown, 1000);
		};


	});