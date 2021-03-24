const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movies page */
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((allBooks) =>
      console.log("We've got the books! We're off the hooks!", allBooks)
    )
    .catch((err) => {
      console.log(
        "Error happened while getting the books. Not like reading much!",
        err
      );
    });
});

module.exports = router;
