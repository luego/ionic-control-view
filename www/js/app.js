// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.constant('$ionicLoadingConfig', {
	template: 'Loading...'
})

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "templates/home.html",
			controller: 'HomeCtrl'
		})
		.state('login', {
			url: "/login",
			templateUrl: "templates/login.html",
			controller: 'LoginCtrl'
		})
		.state('newwork', {
			url: "/new",
			templateUrl: "templates/new.html",
			controller: 'WorkCtrl'
		})
		.state('map', {
			url: "/map",
			templateUrl: "templates/map.html",
			controller: 'MapCtrl'
		});

	$urlRouterProvider.otherwise('/login');
})
	.run(function ($ionicPlatform, $ionicLoading, $rootScope) {
		$rootScope.showMask = function () {
			$ionicLoading.show();
		};
		$rootScope.hideMask = function () {
			$ionicLoading.hide();
		};
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	});