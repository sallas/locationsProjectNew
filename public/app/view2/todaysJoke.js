'use strict';

angular.module('myAppRename.joke', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/joke', {
            templateUrl: 'app/view2/todaysJoke.html',
            controller: 'JokeCtrl'
        });
    }])

    .controller('JokeCtrl', ['$scope', '$http', 'JokeFactory', function ($scope, $http, JokeFactory) {
        JokeFactory.getJoke(function (joke) {
            $scope.joke = joke;
        });
    }]);
