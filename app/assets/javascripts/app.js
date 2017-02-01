var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.factory('_',

  ['$window',

  function($window) {

    return $window._;

  }

]);

MyApp.config(

  ["$httpProvider",

  function($httpProvider) {

    var token = $('meta[name=csrf-token]').attr('content');

    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;

  }

])

.config(

  ['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/messages');

    $stateProvider
    .state('messages', {
      url: '/messages',
      templateUrl: '/templates/messages/index.html', // TODO: correct?
      controller: 'MessagesCtrl'
    })

  }


]);
