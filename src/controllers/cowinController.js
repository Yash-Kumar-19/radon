let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistrict = async function (req, res){
    try{
        let district = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

    }
let getCityTemprature = async function (req, res){
    try{
        let arrayCity = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = req.query.appid
        let cityTemp = []
        for(let cities of arrayCity)
      {  
        
       
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${appid}`
        }
        let result = await axios(options)
        let temp = result.data.main.temp
        let info = {
             city : cities,
             temprature : temp
        }
        cityTemp.push(info)
    }
    cityTemp.sort((a,b) => a.temprature - b.temprature)
        res.status(200).send({ msg: cityTemp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

    }

let getMemes = async function (req, res){
    try{
        
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })  
    }
}
let createMemes = async function (req, res){
    try{
        let id = req.query.template_id
        let fisrtText = req.query.text0
        let secondText = req.query.text1
        let userName = req.query.username
        let password = req.query.password
        console.log(userName)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${fisrtText}&text1=${secondText}&username=${userName}&password=${password}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrict = getByDistrict
module.exports.getCityTemprature = getCityTemprature
module.exports.getMemes = getMemes
module.exports.createMemes = createMemes