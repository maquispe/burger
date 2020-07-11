const connection = require("./connection.js");

const objToSql = (ob) => {
  const arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
};

module.exports = orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (table, cols, val1, val2, cb) => {
    const queryString = "INSERT INTO ??(??) VALUES (?, ?);";
    connection.query(queryString, [table, cols, val1, val2], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    const queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};
