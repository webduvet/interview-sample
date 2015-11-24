(function() {
	describe('Service athena', function(){
    var athena;
    var $httpBackend;
    var $log;

    beforeEach(module('clavis'));
    beforeEach(inject(function(_athena_, _$httpBackend_, _$log_) {
      athena = _athena_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    it('should be registered', function() {
      expect(athena).not.toEqual(null);
    });

	});
})();
