angular.module('starter.services', [])
	.factory('Geo', function ($q) {
		var q = $q.defer();
		var options = {
			maximumAge: 3000,
			timeout: 5000,
			enableHighAccuracy: true
		};

		return {
			getLocation: getLocation
		};

		function getLocation() {
			navigator.geolocation.getCurrentPosition(function (position) {
				q.resolve(position);
			}, function (error) {
				q.reject(error);
			}, options);

			return q.promise;
		}
	})
	.factory('Camara', function ($q) {
		var q = $q.defer();
		var options = {
			quality: 50,
			encodingType: Camera.EncodingType.JPEG,
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.CAMERA
		};

		return {
			getCamara: getCamara
		};

		function getCamara() {

			navigator.camera.getPicture(function (photoUri) {
				q.resolve(photoUri);
			}, function (error) {
				q.reject(error);
			}, options);

			return q.promise;
		}
	});;