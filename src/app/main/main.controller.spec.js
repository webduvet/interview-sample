(function() {
  'use strict';

  describe('Main controller', function(){
    var vm,
			$timeout,
			mockAthena = {
				search: angular.noop,
				getData: angular.noop,
				errorCall: angular.noop
			},
			mockData = {
				data: {}
			},
			mockErrorCaught = {
				data: {}
			},
			mockGetDataPromise = {
				then: function(cb){
					cb(mockData);
					return this;
				}
			},
			mockErrorCallPromise = {
				then: function(){
					return this;
				},
				catch: function(cb) {
					cb(mockErrorCaught);
				}
			}
			;

    beforeEach(module('clavis', {
			athena: mockAthena
		}));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController', {$scope: {}});
			spyOn(mockAthena, 'getData').and.returnValue(mockGetDataPromise);
			spyOn(mockAthena, 'errorCall').and.returnValue(mockErrorCallPromise);
    }));

    it('should load the resource', function() {
			vm.loadResource('something');
      expect(mockAthena.getData).toHaveBeenCalled();
			expect(vm.data).not.toBe(null);
    });

		it('should populate the error object on error call', function() {
			vm.makeErrorCall('error url');
			expect(mockAthena.errorCall).toHaveBeenCalled();
			expect(vm.error).not.toBe(null);
		});

  });
})();
