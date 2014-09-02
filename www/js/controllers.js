angular.module('starter.controllers', [])
	.controller('HomeCtrl', function ($scope) {})
	.controller('LoginCtrl', function ($scope, $location) {
		$scope.loginData = {};
		$scope.login = function () {
			$location.path('home');
		};
	});