const orm = require("../config/orm.js");

const burger = {
    all: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    insert: (cols, val1, val2, cb) => {
        orm.insertOne("burgers", cols, val1, val2, res => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers",objColVals, condition, res => {
            cb(res);
        });
    }
}