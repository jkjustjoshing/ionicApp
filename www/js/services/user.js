angular.module('ionicApp')  
  .factory('User', function($firebase, firebaseKey) {

    var token, info;

    return {
      loggehIn: function() {
        return !!token;
      },
      getInfo: function() {
        return info;
      },
      logIn: function(passedToken) {
        var ref = new Firebase(firebaseKey + 'people/' + passedToken);
        info = $firebase(ref);

        if(info.name) {
          token = passedToken;
          return true;
        } else {
          return false;
        }
      }
    }
  });
