const express = require("express");

const router = express.Router();

let burger = require("../models/beef.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["name", "consumed"],
    [req.body.name, req.body.consumed],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      consumed: req.body.consumed,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id= " + req.params.id;
  console.log("req.params.id");
  burger.delete(condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
