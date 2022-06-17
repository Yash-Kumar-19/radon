const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistrict", CowinController.getByDistrict)
router.get("/getCityTemprature", CowinController.getCityTemprature)
router.get("/getMemes", CowinController.getMemes)
router.post("/createMemes", CowinController.createMemes)

router.post("/cowin/getOtp", CowinController.getOtp)








module.exports = router;