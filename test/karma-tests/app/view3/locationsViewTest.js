describe('myAppRename.locationsView LocationsCtrl', function () {

    var scope, httpBackendMock, ctrl;
    beforeEach(module('myAppRename.locationsView'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
        httpBackendMock = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('LocationsCtrl', {$scope: scope});
    }));


});