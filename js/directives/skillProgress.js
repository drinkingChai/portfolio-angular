app.directive('skillProgress', function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		templateUrl: 'js/directives/skillProgress.html'
	}
})