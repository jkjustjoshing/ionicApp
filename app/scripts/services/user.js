angular.module('ionicApp')  
  .factory('User', function($q, Firebase, $rootScope, $localStorage) {

    var accessCredentials, user, userData;

    return {
      loggedIn: function() {
        return !!accessCredentials;
      },
      getInfo: function() {
      	if(userData) {
      		return $q.when(userData);
      	} else {
					var credentials = {
						u: $localStorage.username,
						p: $localStorage.password
					};

					return this.logIn(credentials).then(function() {
      			return userData;
      		});
      	}
      },
      logIn: function(tokenJSON) {
      	/*
				 * Token JSON should be of the format 
				 * {"u": "abc123", "p": "defghi"}
				 * where the Firebase email is josh+abc123@joshkra.me and the password is defghi.
         */
        if(typeof tokenJSON === 'string') {
        	tokenJSON = JSON.parse(tokenJSON);
        }

        $localStorage.username = tokenJSON.u;
        $localStorage.password = tokenJSON.p;


        return Firebase.authenticate(tokenJSON.u, tokenJSON.p).then(function(thisUser) {
        	user = thisUser;
        	// Get user data
        	return Firebase.request('users/' + user.uid);
        }, function(error) {
        	// No login
        	delete $localStorage.username;
        	delete $localStorage.password;
        	return $q.reject(error);
        }).then(function(thisUserData) {
        	userData = thisUserData;
        });
        
      },
      getCountdown: function() {
    		return Firebase.request('config/countdownDate');
      }
    }
  });
