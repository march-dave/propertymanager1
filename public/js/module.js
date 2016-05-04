'use strict';

var app = angular.module('propertymgrApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
      ,resolve: {
          flashCardDex: function(FlashCardService) {
            return FlashCardService.getAll();
          }
      }
    })
    .state('flashcardlist', {
      url: '/flashcardlist',
      templateUrl: '/html/flashcardlist.html',
      controller: 'flashcardlistCtrl'
      ,
      resolve: {
        flashCardDex: function(FlashCardService) {
          return FlashCardService.getAll();
        }
      }
    })
    .state('newFlashCard', {
      url: '/newFlashCard',
      templateUrl: '/html/newFlashCard.html',
      controller: 'newFlashCardCtrl'
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

    // .state('home', {
    //   url: '/',
    //   templateUrl: '/html/home.html',
    //   controller: 'homeCtrl'
    // })
    // .state('detail', {
    //   url: '/detail/:name',
    //   templateUrl: '/html/detail.html',
    //   controller: 'detailCtrl',
    //   resolve: {
    //     person: function(People, $stateParams) {
    //       // return a promise which will resolve to the person
    //       return People.getByName($stateParams.name);
    //     }
    //   }
    // })
    // .state('detail', {
    //   url: '/detail/:name',
    //   templateUrl: '/html/detail.html',
    //   controller: 'detailCtrl'
    // .state('detail', {
    //   url: '/detail/:peopleIndex',
    //   templateUrl: '/html/detail.html',
    //   controller: 'detailCtrl'
    //   // ,
    //   // resolve: {
    //   //   person: function(People, $stateParams) {
    //   //     // return a promise which will resolve to the person
    //   //     return People.getByName($stateParams.name);
    //   //   }
    //   // }
    // })
    // .state('contact', {
    //   url: '/contact',
    //   templateUrl: '/html/contact.html',
    //   controller: 'contactCtrl'
    // })
    // .state('list', {
    //   url: '/list',
    //   templateUrl: '/html/list.html',
    //   controller: 'listCtrl'
    // })
    // .state('starwarslist', {
    //     url: '/starwarslist',
    //     templateUrl: '/html/starwarslist.html',
    //     controller: 'starwarslistCtrl'
    // })
    // .state('starwarsdetails', {
    //     url: '/starwarsdetails/:peopleIndex',
    //     templateUrl: '/html/starwarsdetails.html',
    //     controller: 'starwarsdetailsCtrl'
    // })

});
