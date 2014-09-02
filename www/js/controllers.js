angular.module('starter.controllers', [])
	.controller('HomeCtrl', function ($scope, $location) {
		$scope.newWork = function () {
			$location.path('new');
		};
	})
	.controller('LoginCtrl', function ($scope, $location) {
		$scope.loginData = {};
		$scope.login = function () {
			$location.path('home');
		};
	})
	.controller('WorkCtrl', function ($scope, $location) {

	});