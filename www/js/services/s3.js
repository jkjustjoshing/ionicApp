angular.module('ionicApp')  
  .factory('S3', function($http, $rootScope, $q, $timeout) {

  	window.AWS.config = new AWS.Config({
  		credentials: {
  			accessKeyId: 'AKIAJKW5V3MMZ2YCPTMQ',
  			secretAccessKey: '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'
  		}
  	});

  	var s3 = new window.AWS.S3();
  	var params = {
  		Bucket: 'me.joshkra.ionicApp'
  	};

  	var getUrl = function(key) {
  		var deferred = $q.defer();

			console.log(key)  		

  		var localParams = angular.extend({}, params, {
				Key: key,
				Expires: 10
			});


			s3.getSignedUrl('getObject', localParams, function(err, url) {
				if(err) {
  				// Some reason a digest already in progress here
  				$timeout(function() {
  					deferred.reject(err);
  				});
  			}else {
  				// Some reason a digest already in progress here
  				$timeout(function() {
  					deferred.resolve(url);
  				});
  			}
			});

			return deferred.promise;
  	};

    return {
    	listObjects: function() {

	    	var deferred = $q.defer();

    		s3.listObjects(angular.extend({}, params, {
    			EncodingType: 'url'
    		}), function(err, data) {
    			if(err) {
    				$rootScope.$apply(function() {
    					deferred.reject(err);
    				});
    			}else {
    				$rootScope.$apply(function() {
    					deferred.resolve(data.Contents.map(function(item) {
    						return item.Key;
    					}).filter(function(item) {
    						return item.indexOf('logs/') !== 0;
    					}));
    				});
    			}
    		});

    		return deferred.promise;

    	},
    	getUrl: function(key) {
    		if(typeof key == 'string') {
    			return getUrl(key);
    		} else if(key instanceof Array) {
    			console.log(key)
    			keyPromises = key.map(function(keyItem) {
    				return getUrl(keyItem);
    			});
    			return $q.all(keyPromises);
    		}
    	}

    };
  });

