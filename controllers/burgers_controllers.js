var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var handlebars = {
            burgers: data
        };
        console.log(handlebars);
        res.render("index", handlebars);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body,devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var status = "id = " + req.params.id;
    burger.change({
        devoured: req.body.devoured
    }, status, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
});

module.exports = router;