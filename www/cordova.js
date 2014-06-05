// Mock cordova object for when running on desktop
window.cordova = window.cordova || {
	plugins: {
		barcodeScanner: {
			scan: function(callback, errback) {
				setTimeout(function() {
					callback({
						text: 'krosseric',
						type: 'QR_CODE',
						cancelled: false
					});
				});
			}
		}
	}
};

window.navigator.camera = window.navigator.camera || {
	getPicture: function(callback, error) {
		setTimeout(function() {
			callback('something!!');
		});
	}
};

window.Camera = window.Camera || {
	PictureSourceType: {
		CAMERA: 'camera',
		SAVEDPHOTOALBUM: 'saved'
	},
	DestinationType: {
		FILE_URI: 'uri'
	},
	EncodingType: {
		JPEG: 'jpeg'
	}
}