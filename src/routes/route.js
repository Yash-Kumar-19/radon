const express = require('express');

const router = express.Router();

router.get('/sol', function (req, res) {
    let arr = [1,2,3,4,5,7]
    let total = 0
    for(let i in arr){
        total += arr[i]
    }
    let lastNumber = arr[arr.length - 1]
    let sum = (lastNumber*(lastNumber+1))/2
    let misssingNumber = sum-total
    res.send(String (misssingNumber))

});

router.get('/sol2', function(req,res){
    let arr = [31,32,33,34,35,37]
    let misssingNumber = 0
    for(let index =0; index < arr.length-1 ; index++){
        if(arr[index+1] - arr[index] > 1){
            misssingNumber = arr[index] + 1
            break
        }
    }
    res.send(String(misssingNumber))
})

module.exports = router;
// adding this comment for no reason