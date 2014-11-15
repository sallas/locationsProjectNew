'use strict';

describe('myAppRename.addLocationsView AddLocationCtrl', function () {

    var scope, ctrl, httpBackendMock;
    beforeEach(module('myAppRename.addLocationsView'));

    beforeEach(inject(function ($rootScope, $controller,  $httpBackend) {
        httpBackendMock = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('AddLocationsCtrl', {$scope: scope});
    }));

    it('should exist', function() {
        expect(ctrl).toBeDefined();
    });

    it('should exist', function() {
        var location = {location: "new york"};
        httpBackendMock.expectPOST('/api/location', location).respond(200, location);
        scope.addLocation(location);
        httpBackendMock.flush();
        expect(scope.data).toEqual(location);
    });

});