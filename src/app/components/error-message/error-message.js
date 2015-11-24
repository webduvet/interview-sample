(function() {
	angular.module('clavis')
	.directive('errorMessage', ErrorMessage);

	function ErrorMessage($log) {
		$log.info('compiling directive');
		return {
			restrict: 'AE',
			controller: errorMsgCtrl,
			link: errorMsgLink,
			controllerAs: 'vm',
			templateUrl: 'app/components/error-message/error-message.html',
			scope: {
				err: '='
			}
		};

		function errorMsgCtrl(moment, $log, $scope, $timeout) {
			var vm = this;

			vm.errorMessage = null;

			this.date = moment();
			$scope.$watch('err', function(val) {
				if (val) {
					vm.errorMessage = val.data.error;
					$timeout(function(){
						vm.errorMessage = null;
					}, 3000);
				}
			});
		}

		function errorMsgLink(scope, elem, attr) {
			var $elem = angular.element(elem);
		}
	}
})();
