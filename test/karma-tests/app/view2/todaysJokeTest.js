describe('myAppRename.joke JokeCtrl', function () {

    describe('controller', function () {
        var scope, ctrl, httpBackend;

        beforeEach(module('myAppRename.joke'));

        beforeEach(module({
            JokeFactory: {
                getJoke: function(callback) {callback("A Joke") }
            }
        }));

        beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
            ctrl = $controller('JokeCtrl', {$scope: scope});
        }));

        it('should exist', function () {
            expect(ctrl).toBeDefined();
        });

        it('should set the joke variable in scope to a random joke', function () {
            expect(scope.joke).toBe('A Joke');
        })
    });
});