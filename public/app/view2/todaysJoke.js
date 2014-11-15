'use strict';

angular.module('myAppRename.joke', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/joke', {
            templateUrl: 'app/view2/todaysJoke.html',
            controller: 'JokeCtrl'
        });
    }])

    .controller('JokeCtrl', ['$scope', '$http', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://greatjokes.herokuapp.com/joke/random'
        })
            .success(function (data, status, headers, config) {
                $scope.joke = data;
            })
            .error(function (data, status, headers, config) {
                $scope.error = data;
            });
    }]);
