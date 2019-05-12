var connection = require("../config/connection.js");

var orm ={
    all: function(input, cb) {
        connection.query("SELECT * FROM " + input + ";", function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insert: function(table, cols, vals, cb) {
        connection.query("INSERT INTO burgers_table (burger_name) VALUES (cheeseburger);", function (err,result) {
            if(err) throw err;
            cb(result);
        })
    },
    change: function(table, objColVals, status, cb) {
        connection.query("UPDATE burgers_table SET devoured = true WHERE id = 1;", function (err, results) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;