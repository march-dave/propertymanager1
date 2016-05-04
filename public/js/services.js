'use strict';

var app = angular.module('propertymgrApp');

app.service('ClientService', function($http, $q) {

  // this.getAll = () => {
  //   return $http({
  //     method: "GET",
  //     url: `/api/clients`,
  //     cache: true
  //   })
  //   .then(res => $q.resolve(res.data));
  // };

  this.getAll = () => {
     return $http.get({'/api/clients', newClient}).then(res => $q.resolve(res.data));
   };

  this.create = newClient => {
     return $http.post('/api/clients', newClient);
   };

  this.delete = function(id) {
    return $http.delete(`/api/clients/${id}`);
  };

  this.edit = function(id, client) {
    return $http.put(`/api/clients/${id}`, client);
  }
});
