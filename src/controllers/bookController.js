const BookModel=require("../models/bookModel")


let createBook=async function(req,res){
    let data=req.body
    let saveData=await BookModel.bookSchema.create(data)
    res.send({msg:saveData})
}
//==================================================================================================

let bookList=async function(req,res){
    let allListBooks=await BookModel.bookSchema.find().select({authorName:1, bookName:1, _id:0})
    res.send({msg:allListBooks})
}
// //===============================================================================
let myBookInYear=async function(req,res){
    let data= req.body.year
    let allBookYear=await BookModel.bookSchema.find({year:data})//key we want then reqbody var
    res.send({msg:allBookYear})
}
// //==========================================================================================

let getParticularBook=async function(req,res){
     let data=req.body
    let getAll=await BookModel.bookSchema.find(data)
    res.send({msg:getAll})
}
// //====================================================================== 
    let getXINRBooks=async function(req,res){
    let allXINR=await BookModel.bookSchema.find({"prices.indianPrice": { $in:[ 100, 200, 500]    } })
    res.send({msg:allXINR})

}

// //===============================================================================
 let getRandomBooks= async function(req,res){
    let allRandom=await BookModel.bookSchema.find({stockAvailable:true,totalPages:{$gt:500}})
    res.send({msg:allRandom})
}

module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.myBookInYear=myBookInYear
module.exports.getParticularBook=getParticularBook
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks






    