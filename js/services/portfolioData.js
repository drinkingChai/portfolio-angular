app.factory('portfolioData', ["$http", function($http) {
	return $http.get('data/portfolio_data.json')
	.success(function(data) {
		return data;
	});
}])