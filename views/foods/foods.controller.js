angular
	.module('myApp')	
	.controller('foodsCtrl', [ 
		'$scope',
		'food_data',
		function($scope, food_data) {

			$scope.title = "Food";

			$scope.food_state_data = food_data;


		}
	]);