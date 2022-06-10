const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publisherController.creatPublisher  )

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.put("/updateIsHardCover", bookController.updateIsHardCover)

router.put("/updatePrice", bookController.updatePrice)



module.exports = router;