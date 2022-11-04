const mongoose=require('mongoose')
const bookSchema=new mongoose.Schema({
    BookName:String,
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"NewAut"
    },
    publish_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"NewPublisher"
    },
    price:Number,
    ratings:Number,
    isHardCover:{
        type:Boolean,
        default:false
    },
},{timestamps:true})
module.exports=mongoose.model('Thump',bookSchema)