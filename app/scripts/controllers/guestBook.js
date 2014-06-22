angular.module('ionicApp')
	.controller('GuestBookCtrl', function($scope, Firebase, $q, User) {
		
		$q.all([
			Firebase.request('guestBook'),
			User.getInfo()
			]).then(function(results) {
				var guestBook = results[0];
				var userInfo = results[1];
				$scope.guestBook = guestBook.map(function(item) {
					if(item.uid === userInfo.uid) {
						$scope.wroteEntry = true;
						item.editable = true;
					}
					Firebase.request('users/' + item.uid + '/fullname').then(function(fullname) {
						item.name = fullname;
					});
					return item;
				});
			});

		$scope.writeEntry = function() {
			// Show editor
			$scope.compose = true;
		};

		$scope.edit = function(item, index) {
			// Go to edit/compose window
		};

	});

	