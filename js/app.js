var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/main.html'
	})
	.when('/portfolio', {
		controller: 'PortfolioController',
		templateUrl: 'views/portfolio.html'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
	.when('/skills', {
		controller: 'SkillsController',
		templateUrl: 'views/skills.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});