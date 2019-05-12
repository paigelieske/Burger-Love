var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers_table", function(res) {
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insert("burgers_table", cols, vals, function(res) {
            cb(res);
        });
    },
    change: function(objColVals, status, cb) {
        orm.change("burgers_table", objColVals, status, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;