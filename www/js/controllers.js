angular.module('starter.controllers', [])
	.controller('HomeCtrl', function ($scope, $location, $rootScope) {

		$rootScope.hide();
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
			$rootScope.show();
			$location.path('home');
		};
	})
	.controller('WorkCtrl', function ($scope, $location) {

	});