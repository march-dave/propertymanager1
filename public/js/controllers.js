'use strict';

var app = angular.module('propertymgrApp');

app.controller('homeCtrl', function($scope, $q, $http, clientDex) {
  $scope.clients = clientDex;
});

app.controller('clientsCtrl', function($scope, $state, $q, $http, clientDex, ClientService) {
  $scope.clients = clientDex;

  $scope.edit = function(client) {

    console.log('1111111');

    $state.go('updateClient');
    // ClientService.edit(client._id, client)
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

  $scope.addNewClient = () => {
    ClientService.create($scope.newClient)
    .then( ()=>  {
      $state.go('clients');
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }
});

app.controller('updateClientCtrl', function($scope, $state, $q, $http, ClientService) {

  $scope.updateClient = () => {
    console.log('3333333')
    // ClientService.getById($scope.client.id)
    ClientService.getById('57298df9a7b82a4143bdee57')
    .then( ()=>  {
      console.log($scope.client);
      // $state.go('clients');
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }
});
