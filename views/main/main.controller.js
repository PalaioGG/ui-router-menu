angular.module('myApp')	
	.controller('mainCtrl', function($scope, $state) {

		$scope.title = "Menu";
		$scope.current_state = $state.current;


	});