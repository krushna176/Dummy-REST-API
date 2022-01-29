const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/SampleDB")
.then(()=>console.log("connection succcess"))
.catch((err)=>console.log(err));