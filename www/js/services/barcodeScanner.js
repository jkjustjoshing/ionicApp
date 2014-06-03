angular.module('ionicApp')  
  .factory('BarcodeScanner', function($q, $rootScope, $document) {

    var token, info;

    return {
      scan: function() {
      	var deferred = $q.defer();

    		cordova.plugins.barcodeScanner.scan(
					function (result) {
						$rootScope.$apply(function() {
							deferred.resolve(result);
						});
					}, 
					function (error) {
						$rootScope.$apply(function() {
							deferred.reject(error);
						});
					}
				);

				return deferred.promise;
      }
    }
  });
