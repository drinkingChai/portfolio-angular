app.controller('HomeController', ['$scope', 'homeData', 'myData', function($scope, homeData, myData) {
	homeData.success(function(data) {
		$scope.data = [data.github, data.linkedin, data.facebook, data.twitter];
	});
	myData.success(function(data) {
		$scope.myInfo = data;
	})
}])