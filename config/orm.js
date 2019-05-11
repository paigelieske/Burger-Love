var connection = require("../config/connection.js");

var orm ={
    all: function(input, cb) {
        connection.query("SELECT * FROM burgers;", function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insert: function(table, cols, vals, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (cheeseburger);", function (err,result) {
            if(err) throw err;
            cb(result);
        })
    },
    change: function(table, objColVals, status, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = 1;", function (err, results) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;