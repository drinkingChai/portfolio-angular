app.controller('PortfolioController', ['$scope', 'portfolioData', function($scope, portfolioData) {
	portfolioData.success(function(data) {
		$scope.data = data;
	});
}])