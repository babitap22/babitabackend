const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    authorName:String,
    age:Number,
    address:String

},
{timestamps:true});

module.exports=mongoose.model('BobbyAuthor',Schema)