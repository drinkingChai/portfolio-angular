app.controller('SkillsController', ['$scope', 'skillsData', function($scope, skillsData) {
	skillsData.success(function(data) {
		$scope.skills = data;
		$scope.fullStackSkills = data.fullStackSkills;
		$scope.compTIAskills = data.compTIAskills;
		$scope.ciscoSkills = data.ciscoSkills;
		$scope.mcse = data.mcse;
	});
}])