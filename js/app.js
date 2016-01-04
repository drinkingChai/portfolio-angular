var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html'
	})
	.when('/portfolio', {
		controller: 'PortfolioController',
		templateUrl: 'views/portfolio.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});