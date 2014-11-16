'use strict';

describe('myAppRename.home module', function () {

    beforeEach(module('myAppRename.home'));

    describe('home controller', function () {

        it('should exist', inject(function ($controller) {
            var homeCtrl = $controller('HomeCtrl');
            expect(homeCtrl).toBeDefined();
        }));

    });
});