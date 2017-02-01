MyApp.controller('MessagesCtrl',

  ['$scope', 'Restangular',

  function($scope, Restangular) {

    $scope.test = "THIS IS A TEEEEEST";

    $scope.messages = Restangular.all('messages').getList().$object;

  }

]);
