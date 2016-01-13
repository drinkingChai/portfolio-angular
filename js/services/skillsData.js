app.factory('skillsData', ['$http', function($http) {
	return $http.get('data/skills_data.json').success(function(data) {
		return data;
	});
}])