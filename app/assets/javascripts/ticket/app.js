var app = angular.module('ticket', [
  'ngResource',
  'ngAnimate',
  'ui.bootstrap',
  'ngLocale',
  ])
  .config([
    "$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
  ]);
