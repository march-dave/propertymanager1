'use strict';

var app = angular.module('propertymgrApp');

app.controller('homeCtrl', function($scope, $q, $http, clientDex) {
  $scope.clients = clientDex;
});

app.controller('clientsCtrl', function($scope, $state, $q, $http, clientDex, ClientService) {
  $scope.clients = clientDex;

  $scope.edit = function(client) {
    ClientService.edit(client._id, client)
  }

  $scope.delete = client => {

    $scope.clients.splice(client._id, 1);
    ClientService.delete(client._id)
    .then( ()=>  {
      // $state.go('clients');
    })
    .catch(err => {
      console.log('err', err.data);
    });
  }
});

app.controller('newClientCtrl', function($scope, $state, $q, $http, ClientService) {

  console.log('Add new ClientService', ClientService);

  $scope.addNewClient = () => {
    ClientService.create($scope.newClient)
    .then( ()=>  {
      $state.go('clients');

      console.log('');


    })
    .catch(err => {
        console.log('err', err.data);
    });



  }
});

app.controller('flashcardlistCtrl', function($scope, $q, $http, flashCardDex, FlashCardService) {
  $scope.cards = flashCardDex;

  $scope.edit = function(card) {
    FlashCardService.edit(card._id, card)
  }

  $scope.delete  = card => {
    FlashCardService.delete(card._id);
  }

});
