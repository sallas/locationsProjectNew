global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var request = require('request');
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var Location = mongoose.model("Location");
var sinon = require('sinon');

describe('REST API for /location', function () {

    var stub, stub2;
    //Start the Server before the TESTS
    before(function (done) {
        testServer = app.listen(testPort, function () {
            console.log("Server is listening on: " + testPort);
            done();
        })
            .on('error', function (err) {
                console.log(err);
            });
    });

    beforeEach(function (done) {
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

    beforeEach(function () {
        this.sinon = sinon.sandbox.create();
    });

    afterEach(function () {
        //if(stub) {stub.restore();}
        //if(stub2) {stub2.restore();}
        this.sinon.restore();
    });

    after(function () {  //Stop server after the test
        //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
        //mongoose.connection.db.dropDatabase();
        testServer.close();
    });

        it("Should get 2 location objects", function (done) {
            http.get("http://localhost:" + testPort + "/api/location", function (res) {
                res.setEncoding("utf8");//response data is now a string
                res.on("data", function (chunk) {
                    var n = JSON.parse(chunk);
                    n.length.should.equal(2);
                    done();
                });
            })
        });

        it("Should get an array of location objects", function (done) {
            http.get("http://localhost:" + testPort + "/api/location", function (res) {
                res.setEncoding("utf8");//response data is now a string
                res.on("data", function (chunk) {
                    var n = JSON.parse(chunk);
                    n[0].Name.should.equal("Bad location");
                    done();
                });
            })
        });

        it("Should get an array, using stubbing", function (done) {
            stub = sinon.stub(Location, 'find').yields(null, "location");
            http.get("http://localhost:" + testPort + "/api/location", function (res) {
                res.setEncoding("utf8");//response data is now a string
                res.on("data", function (chunk) {
                    var n = JSON.parse(chunk);
                    n.should.equal("location");
                    done();
                });
            });
        });

        it("Should add a new location", function (done) {
            var location = {
                "Name": "Bad location",
                "Description": "molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad",
                "Rating": 3,
                "country": "Bangladesh",
                "cty": "Brampton",
                "zip": "5419",
                "street": "720-6932 Fames Avenue",
                "gps": "17.11372, -100.30735"
            };
            sinon.stub(Location.prototype, 'save').yields(null);
            stub = sinon.stub(Location, 'findOne').yields(null, location);
            request.post("http://localhost:" + testPort + "/api/location",
                { json: location }, function (error, response, body) {
                    var returnLocation = body;
                    returnLocation.Name.should.equal("Bad location");
                    done();
                });
        });
});
