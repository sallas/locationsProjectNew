describe('myAppRename.joke JokeCtrl', function () {

    describe('controller', function () {
        var scope, ctrl, httpBackend;

        beforeEach(module('myAppRename.joke'));

        beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
            ctrl = $controller('JokeCtrl', {$scope: scope});
        }));

        it('should exist', function () {
            expect(ctrl).toBeDefined();
        });

        it('should exist', function () {
            var joke = "My programming skills";
            httpBackend.expectGET('http://greatjokes.herokuapp.com/joke/random').
                respond(joke);
            httpBackend.flush();
            expect(scope.joke).toEqual(joke);
        });
    });
});