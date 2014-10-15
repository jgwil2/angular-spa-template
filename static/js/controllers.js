'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('LoginCtrl', ['$scope', 'AuthService', '$location',
	function($scope, AuthService, $location){

		// initialize credentials object
		$scope.credentials = {};

		// on form submit call AuthService's login function with user's credentials
		// on success, redirect to home page
		$scope.login = function(){
			AuthService.login($scope.credentials).success(function(){
				$location.path('/');
			})
		}
	}
]);

appControllers.controller('RegisterCtrl', ['$scope', 'RegisterService', '$location',
	function($scope, RegisterService, $location){

		// initialize credentials object
		$scope.credentials = {};

		$scope.register = function(){
			RegisterService.registerUser($scope.credentials).success(function(){
				$location.path('/login');
			});
		}
	}
]);

appControllers.controller('HomeCtrl', ['$scope', 'AuthService', '$location',
	function($scope, AuthService, $location){

		// get current user from localStorage
		$scope.user = AuthService.getCurrentUser();

		// on form submit, call AuthService's logout function
		// on success redirect to login page
		$scope.logout = function(){
			AuthService.logout().success(function(){
				$location.path('/login');
			});
		}
	}
]);
