'use strict';

angular.module('myAppRename.addLocationsView', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addLocation', {
            templateUrl: 'app/view4/addLocation.html',
            controller: 'AddLocationsCtrl'
        });
    }])
    .controller('AddLocationsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.addLocation = function (location) {
            $http({
                method: 'POST',
                url: '/api/location',
                data: location
            }).
                success(function (data, status, headers, config) {
                    $scope.data = data;
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        };
    }]);