const connection = require("../config/connection.js");

function printMarksOfQuestion(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function sqlObj(ob) {
  const arr = [];

  for (const key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  create: function (table, cols, vals, cb) {
    const queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printMarksOfQuestion(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },

  update: function (table, objColVals, condition, cb) {
    const queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += sqlObj(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};

module.exports = orm;
