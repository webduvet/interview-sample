(function() {
  'use strict';

  angular
    .module('clavis')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
