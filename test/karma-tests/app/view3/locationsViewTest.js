describe('myAppRename.locationsView LocationsCtrl', function () {

    var scope, httpBackendMock, ctrl;
    beforeEach(module('myAppRename.locationsView'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
        httpBackendMock = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('LocationsCtrl', {$scope: scope});
    }));

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });

    it('should receive a list of locations', function () {
        var locationList = [{location: "new york"}, {location: "york"}];
        httpBackendMock.expectGET('api/location').respond(locationList);
        httpBackendMock.flush();
        expect(scope.locations).toEqual(locationList);
    });


});