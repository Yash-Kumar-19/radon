
const headerPresent = function ( req, res, next) {
    let isUser = req.headers.isfreeappuser
    if(isUser == "true" || isUser == "false" ){
        next()
    }
    else{
        res.send({msg: "Mandatory Header isFreeAppUser is missing"})
    }
    
}



module.exports.headerPresent= headerPresent
