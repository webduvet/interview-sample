(function() {
  'use strict';

  angular
    .module('clavis')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(athena, $scope) {
    var vm = this;

		this.data = null;
		this.error = null;
		this.loadResource = loadResource;
		this.makeErrorCall = makeErrorCall;
		this.clear = clear;

		$scope.data = 'waiting';

		function loadResource() {
			athena.getData()
			.then(function(response) {
				vm.data = response.data;
			});
		}

		function makeErrorCall() {
			athena.errorCall()
			.then(function(response) {
				// some non error logic
			})
			.catch(function(error) {
				vm.error = error;
			});
		}

		function clear() {
			vm.data = null;
			vm.error = null;
		}

  }
})();
