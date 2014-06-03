angular.module('ionicApp')  
  .factory('User', function($q, firebaseKey, $rootScope) {

    var token, info;

    return {
      loggedIn: function() {
        return !!token;
      },
      getInfo: function() {
        return info;
      },
      logIn: function(passedToken) {

        var deferred = $q.defer();

        var ref = new Firebase(firebaseKey + 'people/' + passedToken);

        ref.on('value', function(value) {
            if(value.val() && value.val().name) {
              info = value.val();
              token = passedToken;
              deferred.resolve(true);
            } else {
              deferred.resolve(false);
            }
        }, function(error) {
            deferred.resolve(false);
        });

        return deferred.promise;
        
      }
    }
  });
