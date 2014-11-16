describe('myAppRename.factories', function () {

    beforeEach(module('myAppRename.factories'));

    describe('InfoFactory', function () {
        var infoFactory;
        beforeEach(inject(function (_InfoFactory_) {
            infoFactory = _InfoFactory_;
        }));

        it('Should be Hello World from a Factory', function () {
            expect(infoFactory.getInfo()).toBe("Hello World from a Factory");
        });
    });


    describe('JokeFactory', function () {
        var JokeFactory, httpBackend;

        beforeEach(inject(function(_JokeFactory_, $httpBackend) {
            httpBackend = $httpBackend;
            JokeFactory = _JokeFactory_;
        }));

        it('Should', function () {
            var returnedJoke;
            var joke = "My programming skills";
            httpBackend.expectGET('http://greatjokes.herokuapp.com/joke/random').
                respond(joke);
            JokeFactory.getJoke(function (joke) {
                returnedJoke = joke;
            });
            httpBackend.flush();
            expect(returnedJoke).toBe(joke);
        });
    });
});