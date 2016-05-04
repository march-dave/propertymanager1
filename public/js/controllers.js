'use strict';

var app = angular.module('propertymgrApp');

app.controller('homeCtrl', function($scope, $q, $http, clientDex) {
  $scope.clients = clientDex;
});

app.controller('clientsCtrl', function($scope, $state, $q, $http, clientDex, ClientService) {
  $scope.clients = clientDex;

  $scope.edit = function(client) {
      $state.go('updateClient', {"id": client._id});
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

app.controller('updateClientCtrl', function($scope, $state, ClientService) {

  ClientService.getById($state.params.id)
    .then(function(res){
      $scope.client = res.data;
    })

  $scope.updateClient = () => {

    ClientService.getById($state.params.id)
    .then( ()=>  {
    })
    .catch(err => {
        console.log('err', err.data);
    });
  }
});
