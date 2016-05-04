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

    .state('list', {
      url: '/list/:id',
      templateUrl: '/html/list.html',
      controller: 'listCtrl'
      ,
      resolve: {
        starDex: function(StarWars, $stateParams) {
          var id = $stateParams.id;
          return StarWars.getStarDex(id);
        }
      }
    })
    .state('detail', {
      url: '/detail/:id',
      templateUrl: '/html/detail.html',
      controller: 'detailCtrl',
      resolve: {
        starwars: function(StarWars, $stateParams) {
          var id = $stateParams.id;
          return StarWars.getById(id);
        }
      }

    })

    $urlRouterProvider.otherwise('/');

});
