const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel= require("../models/userModel")
const productModel= require("../models/productModel")



const createOrder= async function (req, res) {
    
    let requestProductId = req.body.productId
    let requestUserID = req.body.userId
    let isAppUser = req.headers.isfreeappuser
    let pricedAt = req.headers.amount
    //Checking for valid ProductId and UserID
    let product_Id = await productModel.findById(requestProductId)
    let user_Id = await userModel.findById(requestUserID)
    if(!product_Id){
        res.send({msg : "Not a valid Prodcut ID"})
    }else{
             if(!user_Id){
            res.send({msg : "Not a valid User ID"})
        } 
    }
    console.log(product_Id.price)
    let suffBalance =  user_Id.balance - (product_Id.price)
    
    //Checking wether if free app user or not
        if(isAppUser == "false"){
            if(suffBalance < 0){

                res.send({msg : "User Does Not Have Sufficient Balance"})
            }
            else{
                pricedAt = product_Id.price
                await userModel.findOneAndUpdate(
                    {_id : requestUserID},
                    {$set: {balance : suffBalance}}
                )
            }
        }else{
            pricedAt = 0
        }

    let data = {
        userId: requestUserID,
        productId : requestProductId,
        amount : pricedAt,
        isFreeAppUser : isAppUser,
        date : req.body.date
    }
   let savedData = await orderModel.create(data)
   res.send({data : savedData})
}

module.exports.createOrder = createOrder


