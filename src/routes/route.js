const express = require('express');
const router = express.Router();

const bothController= require("../controllers/bothController")
////////Test API's/////////
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
////////API's For Question///////////
router.post("/createNovel", bothController.createNovel)

router.post("/createAuthor", bothController.createAuthor)

router.get("/getBooksByCB", bothController.getBooksByCB)

router.get("/getUpdatedPrice", bothController.getUpdatedPrice)

router.get("/getPriceAndAuthor", bothController.getPriceAndAuthor)

module.exports = router;