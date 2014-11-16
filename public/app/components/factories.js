'use strict';

/* Factories */

angular.module('myAppRename.factories', [])
    .factory('InfoFactory', function () {
        var info = "Hello World from a Factory";
        var getInfo = function getInfo() {
            return info;
        };
        return {
            getInfo: getInfo
        }
    })
    .factory('JokeFactory', ['$http', function ($http) {
        var getJoke = function (callback) {
            $http({
                method: 'GET',
                url: 'http://greatjokes.herokuapp.com/joke/random'
            })
                .success(function (data, status) {
                    callback(data);
                })
                .error(function (data, status) {
                });
        };
        return {
            getJoke: getJoke
        }
    }])
    ;