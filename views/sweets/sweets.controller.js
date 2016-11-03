angular
	.module('myApp')	
	.controller('sweetsCtrl', [ 
		'$scope',
		'sweets_data',
		function($scope, sweets_data) {

			$scope.title = "Sweets";

			$scope.sweets_state_data = sweets_data;


		}
	]);