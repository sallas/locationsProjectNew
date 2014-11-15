'use strict';

angular.module('myAppRename.locationsView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/locations', {
            templateUrl: 'app/view3/locations.html',
            controller: 'LocationsCtrl'
        });
    }])

    .controller('LocationsCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'api/user'
        }).
            success(function (data, status, headers, config) {
                $scope.users = data;
            }).
            error(function (data, status, headers, config) {
                $scope.error = data;
            });
    });



