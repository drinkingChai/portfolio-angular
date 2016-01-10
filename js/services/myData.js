app.factory('myData', ['$http', function($http) {
	return $http.get('data/my_info.json').success(function(data) {
		return data;
	})
}])