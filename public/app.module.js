(function() {
  'use strict';
  angular.module('meowTooApp', ['ui.router', 'ngCart'])

    .config(function($httpProvider) {

      // attach our auth interceptor to the http requests
      $httpProvider.interceptors.push('authInterceptor');
    })

    .run(['authService', function(authService){
      if (authService.isLoggedIn()) authService.setUser();
    }]);

})();
