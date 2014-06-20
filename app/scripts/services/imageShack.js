angular.module('ionicApp')  
  .factory('ImageShack', function($http, $rootScope, $q) {

    var apiKey = '46ACHORSb1ecebeaaaa4e1306b018a011ba763b8';
    var apiRoot = 'https://api.imageshack.com/v2';

    var auth_token;

    var albumName = 'testAlbum';

    return {
    	loggedIn: function() {
    		return !!auth_token;
    	},
      login: function() {
      	return $http({
      		method: 'POST',
      		url: apiRoot + '/user/login',
      		data: {
      			api_key: apiKey,
      			user: 'spamjoshkrame',
      			password: 'uQH2^%AK9Q>cFL34f:R2uMNsrG{77X]u'
      		}
      	}).then(function(response) {
    			if(response.data && response.data.result && response.data.result.auth_token) {
    				auth_token = response.data.result.auth_token;
    				return true;
      		} else {
      			return $q.reject();
      		}
      	}, function() {
      		return $q.reject();
      	});
      }, 
      upload: function(photoOrSomething) {
      	var login;
      	if(this.loggedIn()) {
      		login = $q.when();
      	} else {
      		login = this.login();
      	}

      	return login.then(function() {
      		return $http({
	      		method: 'POST',
	      		url: apiRoot + '/images',
	      		data: {
	      			api_key: apiKey,
	      			auth_token: auth_token,
	      			album: albumName
	      		}
	      	});
      	});
      }
    };
  });
