(function() {
  'use strict';

  angular
    .module('clavis')
    .service('athena', athena);
	
	athena.$inject = ['$http', '$log'];
	function athena($http, $log) {
		$log.info('loaded resource');
		var normalUrl = 'https://athena-7.herokuapp.com/ancients.json',
			errorUrl = 'https://athena-7.herokuapp.com/ancients.json?error=true',
			searchUrl = 'https://athena-7.herokuapp.com/ancients.json?search=';
		return {
			getData: function() {
				return $http({
					method: 'GET',
					url: normalUrl,
					cache: true
				});
			},
			fetch: function() {
				$http.get(url);
			},
			errorCall: function() {
				return $http.get(errorUrl);
			},
			search: function(str) {
				// using angular built in cache
				return $http({
					method: 'GET',
					url: searchUrl + str,
					cache: true
				});
			}
		};
	}
})();
