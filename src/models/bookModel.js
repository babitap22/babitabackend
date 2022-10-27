const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require: true,
    },
    prices:{
        types:String,
        indianPrice:String,
        europePrice:String
    },
    year:{
        type: Number,
        default:2021,
    },
    tag:[String],
    authorName:String,
    totalPage:Number,
    stockAvailable:Boolean,

}, { timestamps: true });

module.exports.bookSchema = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
