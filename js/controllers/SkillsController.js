app.controller('SkillsController', ['$scope', 'skillsData', function($scope, skillsData) {
	skillsData.success(function(data) {
		$scope.skills = data;
	});
}])