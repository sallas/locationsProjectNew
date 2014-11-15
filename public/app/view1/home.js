'use strict';

angular.module('myAppRename.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/partials/partial1',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function() {
});