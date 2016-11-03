angular
	.module('myApp')	
	.controller('beveragesCtrl', [ 
		'$scope',
		'beverages_data',
		function($scope, beverages_data) {

			$scope.title = "Beverages";

			$scope.beverages_state_data = beverages_data;


		}
	]);