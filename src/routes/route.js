const express = require('express');

const lodash = require('lodash');

const welcomeFunction = require('../logger/logger')

const helperFunction = require('../util/helper')

const formatterFunction = require('../validator/formatter')

const router = express.Router();


router.get('/test-me', function (req, res) {
    welcomeFunction.welcome()
    helperFunction.printDate()
    helperFunction.printMonth()
    helperFunction.getBatchInfo()
    formatterFunction.trim("  FuncTiOnUp  ")
    formatterFunction.toLowerCase("  FuncTiOnUp  ")
    formatterFunction.toUpperCase("  FuncTiOnUp  ")
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const months = ["January","February","March","April","May","June","July","August","September",
    "october", "november","december"]
    let afterChunk = lodash.chunk(months,3)
    console.log(afterChunk)

    const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let afterTail = lodash.tail(oddNumber)
    console.log(afterTail)

    const arr1 = [1,2]
    const arr2 = [2,3]
    const arr3 = [3,4]
    const arr4 = [4,5]
    const arr5 = [5,6]
    let afterUnion = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(afterUnion)

    const movies = [ ["horror","The Shining"],["drama" , "Titanic"],["thriller" , "Shutter Island"],
                             ["fantasy" , "Pans Labyrinth"]]
    let afterFromPairs = lodash.fromPairs(movies)
    console.log(afterFromPairs)


    res.send('hello Api!!')
})

module.exports = router;
// adding this comment for no reason