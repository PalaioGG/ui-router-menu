angular.module('myApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'views/main/main.html',
				controller: 'mainCtrl'
			})
			.state('foods', {
				url: '/foods',
				templateUrl: 'views/foods/foods.html',
				controller: 'foodsCtrl',
				resolve: {
					food_data: function ($http) {
						return $http({
							method: 'GET',
							url: 'data/food.json'
						}). then (function(data) {
							return data.data;
						})
					}
				}
			})
			.state('sweets', {
				url: '/sweets',
				templateUrl: 'views/sweets/sweets.html',
				controller: 'sweetsCtrl'
			})
			.state('beverages', {
				url: '/beverages',
				templateUrl: 'views/beverages/beverages.html',
				controller: 'beveragesCtrl'
			})
	});