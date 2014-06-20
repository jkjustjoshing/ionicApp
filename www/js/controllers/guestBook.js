angular.module('ionicApp')
	.controller('GuestBookCtrl', function($scope, Firebase) {
		
		Firebase.request('guestBook').then(function(guestBook) {
			$scope.guestBook = guestBook.map(function(item) {
				Firebase.request('users/' + item.uid + '/fullname').then(function(fullname) {
					item.name = fullname;
				});
				return item;
			});
		});

	});

	