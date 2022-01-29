const mongoose=require('mongoose');
const sampleData = new mongoose.Schema({
        name: String,
        addr:String,
        enroll:Number,
        data:{
            type:Date,
         default: Date.now
        }
    })
    const Sample = new mongoose.model("Sample",sampleData);
    module.exports=Sample;