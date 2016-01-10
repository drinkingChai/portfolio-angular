app.factory('homeData', ['$http', function($http) {
	return $http.get('data/home_links.json').success(function(data) {
		return data;
	});
}])