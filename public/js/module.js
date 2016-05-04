'use strict';

var app = angular.module('propertymgrApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
      ,resolve: {
          clientDex: function(ClientService) {
            return ClientService.getAll();
          }
      }
    })
    .state('clients', {
      url: '/clients',
      templateUrl: '/html/clients.html',
      controller: 'clientsCtrl'
      ,
      resolve: {
        clientDex: function(ClientService) {
          return ClientService.getAll();
        }
      }

    })
    .state('newClient', {
      url: '/newClient',
      templateUrl: '/html/newClient.html',
      controller: 'newClientCtrl'
    })

    .state('updateClient', {
      url: '/updateClient',
      templateUrl: '/html/updateClient.html'
      ,controller: 'updateClientCtrl'
      // ,
      // resolve: {
      //   clientById: function(ClientService, id) {
      //     return ClientService.getById(id);
      //   }
      // }
    })

    $urlRouterProvider.otherwise('/');

});
