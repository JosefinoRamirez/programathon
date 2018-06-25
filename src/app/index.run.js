(function() {
  'use strict';

  angular
    .module('programathon')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
