var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Location = mongoose.model('Location');

router.get('/location', function (req, res) {
    if (typeof global.mongo_error !== "undefined") {
        res.status(500);
        res.end("Error: " + global.mongo_error + " To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }

    Location.find({}, function (err, locations) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type", "application/json");
        res.end(JSON.stringify(locations));
    });

//  user.find({}, function (err, users) {
//    if (err) {
//      res.status(err.status || 400);
//      res.end(JSON.stringify({error: err.toString()}));
//      return;
//    }
//    res.header("Content-type","application/json");
//    res.end(JSON.stringify(users));
//  });
});

router.post('/location', function (req, res) {
    var location = new Location(req.body);
    location.save(function (err) {
        if (err) {
            console.log("this is a error " + err + "\n");
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        Location.findOne({_id: location._id}, function (err, loc) {
            if (err) {
                console.log("this is a error " + err + "\n");
                res.status(err.status || 400);
                res.end(JSON.stringify({error: err.toString()}));
                return;
            }
            res.header("Content-type", "application/json");
            res.end(JSON.stringify(loc));
        });
    });
});

module.exports = router;
