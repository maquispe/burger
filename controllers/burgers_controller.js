const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all(data => {
    const hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  const body = req.body;
  burger.insert([
    "burger_name", "devoured"
  ], [
    body.burger_name,
    false],
     (data) => {
      res.json({ id: data.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id= " + req.params.id;

    burger.update({
        devoured: true
    }, condition, data => {
        res.status(200).end();
        });
});


module.exports = router;
