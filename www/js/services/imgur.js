angular.module('ionicApp')  
  .factory('Imgur', function($http, $rootScope, $q) {

    var clientId = '5ffae4b16eda71d';
    var clientSecret = '40238e80bded2a5815be9ddb7cc69991a2e0a655';
var album = '481i7';
    return {
      getAlbum: function(albumKey) {
      	return $http({
      		method: 'GET',
      		url: 'https://api.imgur.com/3/album/' + albumKey, 
      		headers: {
      			Authorization: 'Client-ID ' + clientId
      		}
      	}).then(function(data) {
      			if(data.data.success) {
      				return data.data.data;
      			} else {
      				return $q.reject(data.data.data);
      			}
      		}, function() {
    				return $q.reject({
    					error: 'Connection issue',
    					method: 'GET',
    					request: '/3/album/' + albumKey
    				});
      		});

      }
    };
  });
