const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/employdatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected tarun")
}).catch((e)=>{
    console.log(`not connected tarun error is ${e}`)
})