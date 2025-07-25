const mongoose=require("mongoose")
const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    comment:{
        type:String,
        maxlength:1000,
    },
},
{timestamps:true}
)

module.exports=mongoose.model("Review",reviewSchema)