const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    authorName:String,
    age:Number,
    address:String

},
{timestamps:true});

module.exports=mongoose.model('authorId',userSchema)