// Mock cordova object for when running on desktop
window.cordova = {
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