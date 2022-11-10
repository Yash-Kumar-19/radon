const express = require('express');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app=express();

app.use(express.json());


mongoose.connect("mongodb+srv://Yash1999:3Bw0gG3jLVVmLcCb@cluster0.0pxxn.mongodb.net/assignment", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.use((req,res,next)=>{
    res.status(404).send({status:404, msg:`Not found ${req.url}`})
    next()
})

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});