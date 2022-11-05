const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    
    name:String,
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
    },
    price:Number,
    rating:Number
},{timestamps:true});

module.exports=mongoose.model('BookColllection',userSchema)