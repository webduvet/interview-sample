(function() {
	angular.module('clavis')
	.service('localCache', LocalCache);

	function LocalCache($log) {
		this._cached = [];
	}

	LocalCache.prototype.add = function(key, data) {
		this._cached[key] = data;
	};

	LocalCache.prototype.retrieve = function(key) {
		return this._cached[key];
	};

	LocalCache.prototype.pop = function(key) {
		var val = this._cached[key];
		delete this._cached[key];
		return val;
	};

	LocalCache.prototype.clear = function(key) {
		if (this._cached[key]) {
			delete this._cached[key];
		}
	};

})();
