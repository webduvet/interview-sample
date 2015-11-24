(function() {
	angular.module('clavis')
	.directive('searchBox', searchBoxDirective);

	function searchBoxDirective($log, localCache, apiService, athena) {
		return {
			restrict: 'AE',
			controller: searchBoxCtrl,
			controllerAs: 'vm',
			templateUrl: 'app/components/search/search.html',
			scope: {
				model: '='
			}
		}
		function searchBoxCtrl($scope) {
			var vm = this;

			vm.search = null;

			vm.submit = function() {
				athena.search(vm.search)
				.then(function(response) {
					$log.info(response);
					vm.search = null;
					$scope.model = response.data.ancients;
				});
			};
		}
	}
})();
