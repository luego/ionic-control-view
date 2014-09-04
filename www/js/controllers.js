angular.module('starter.controllers', [])
	.controller('HomeCtrl', function ($scope, $location, $rootScope) {
		$rootScope.hideMask();
		$scope.works = [{
			id: 1,
			name: 'Obra 1'
		}, {
			id: 2,
			name: 'Obra 2'
		}];

		$scope.addData = function (id) {
			alert(id);
		};

		$scope.newBuildingSite = function () {
			$location.path('new');
		};
	})
	.controller('LoginCtrl', function ($scope, $location, $rootScope) {
		$scope.loginData = {};
		$scope.login = function () {
			$rootScope.showMask();
			$location.path('home');
		};
	})
	.controller('WorkCtrl', function ($scope, $location, Geo, Camara) {
		$scope.photoUri = null;

		$scope.newPhoto = function () {
			Camara.getCamara().then(function (photoUri) {
				$scope.photoUri = photoUri;
				console.info($scope.photoUri.substr(currentPhoto.lastIndexOf('/') + 1));
			}, function (error) {
				alert('Unable to get Camara photo: ' + error);
			});
		};

		$scope.newVideo = function () {

		};
	})
	.controller('MapCtrl', function ($scope, $rootScope, Geo) {

		$rootScope.showMask();

		$scope.refreshData = function () {
			Geo.getLocation().then(function (position) {
				$rootScope.hideMask();
				loadMap(position.coords.latitude, position.coords.longitude);
			}, function (error) {
				$rootScope.hideMask();
				alert('Unable to get current location: ' + error);
			});
		};

		$scope.refreshData();

		function loadMap(lat, lng) {
			console.log(lat + ' - ' + lng);
			var latlng = new google.maps.LatLng(lat, lng);
			var myOptions = {
				zoom: 14,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var mapObj = document.getElementById("map_canvas");
			var map = new google.maps.Map(mapObj, myOptions);
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: "Here!"
			});
		}
	});