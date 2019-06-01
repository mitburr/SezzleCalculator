var express = require("express");

var router = express.Router();
var db = require("../models/");

router.get("/", function(req, res){
    db.Calculation.findAll().then(function(calcs){
        console.log(calcs)
        res.send(calcs);
    })
})

router.get("/create/:calc", function(req, res) {
    console.log(req.params.calc)
    // create SQL table entry for Calculation
    db.Calculation.create({
      Calc: req.params.calc
    })
      // pass the result of our call
      .then(function(dbcalc) {
        // log the result to our terminal/bash window
        db.Calculation.findAll().then(function(calcs){
            console.log(calcs[0].dataValues)
            res.send(calcs);
        })
    });
  });
  

module.exports = router;