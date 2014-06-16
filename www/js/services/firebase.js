angular.module('ionicApp')  
  .factory('Firebase', function($http, $rootScope, $q, $timeout, firebaseKey) {

  	return {
  		request: function(path) {
  			var deferred = $q.defer();
console.log('requesting', firebaseKey + path)
    		var ref = new Firebase(firebaseKey + path);

        ref.on('value', function(value) {
          if(value.val()) {
            deferred.resolve(value.val());
          } else {
            deferred.reject();
          }
        }, function(error) {
          deferred.reject();
        });

        return deferred.promise;
  		},
  		authenticate: function(username, password) {
  			var deferred = $q.defer();

        var ref = new Firebase(firebaseKey);
        var auth = new FirebaseSimpleLogin(ref, function(error, thisUser) {
				  if (error) {
				    deferred.reject(error);
				    return;
				  }
				  if (thisUser) {
				    // User got logged in
				    deferred.resolve(thisUser);
				  }
				});

        auth.login('password', {
				  email: 'josh+' + username + '@joshkra.me',
				  password: password
				});

        return deferred.promise;
  		}
    };
  });

