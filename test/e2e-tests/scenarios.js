'use strict';
global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";
/* https://github.com/angular/protractor/blob/master/docs/toc.md */
var db = require('../../server/model/db');
var mongoose = require("mongoose");
var Location = mongoose.model("Location");

describe('my app', function () {

    browser.get('/');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });


    describe('view1', function () {

        beforeEach(function () {
            browser.get('#/home');
        });


        it('should render view1 when user navigates to /view1', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 1/);
        });

    });

    describe('viewLocations', function () {

        beforeEach(function (done) {
            browser.get('#/locations');
            Location.remove({}, function () {
                var array = [
                    {
                        "Name": "Bad location",
                        "Description": "molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad",
                        "Rating": 3,
                        "country": "Bangladesh",
                        "cty": "Brampton",
                        "zip": "5419",
                        "street": "720-6932 Fames Avenue",
                        "gps": "17.11372, -100.30735"
                    },
                    {
                        "Name": "Good location",
                        "Description": "Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis",
                        "Rating": 4,
                        "country": "Japan",
                        "cty": "Oppido Mamertina",
                        "zip": "5340",
                        "street": "2188 Venenatis St.",
                        "gps": "-54.38124, -62.16094"
                    }
                ];
                Location.create(array, function (err) {
                    done();
                });
            });
        });

        it('should render view1 when user navigates to /view1', function () {
            var allLocations = element.all(by.repeater('location in locations'));
            expect(allLocations.count()).toEqual(2);
            var locationName = element(by.binding('location.Name')).getText();
            expect(locationName).toEqual('Bad location');
        });

    });


});
