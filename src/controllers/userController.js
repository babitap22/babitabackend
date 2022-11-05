
const userAuthor=require("../models/createAuthor")
const userBook=require("../models/createBook")
const Author=require("../models/creatAuthor")

////////////////////1////////////////
const createObject=async function(req,res){
    let data =req.body
    let savedata=await userAuthor.create(data)
    res.send({msg:savedata})
}
const createBooks=async function(req,res){
    let data=req.body
    let savedata=await userBook.create(data)
    res.send({msg:savedata})
}
// //////////////////////////////2//////////////////
const getBooksbyChetanBhagat=async function(req,res){
    let data=await userAuthor.findOne({authorName:"Chetan Bhagat"}).select({_id:1})
    let savedata=await userBook.find({author_id:data}).select({name:1,price:1,_id:0,author_id:1})
    res.send({msg:savedata})
}
// ///////////////////////////////3///////////////
const findAuthor= async function(req,res){
    let data =await userBook.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
     let savedata=await userAuthor.findOne({_id:data.author_id}).select({authorName:1,_id:0,price:1})
    res.send({msg:savedata})
}
// ///////////////////////////////////////4///////
const author=async function(req,res){
    let data=await userBook.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let arr=[];
    for(let i=0;i<data.length;i++){
        let x=data[i]
        let y=x.author_id
        let author_name=await userAuthor.find({_id:y}).select({authorName:1,_id:0})
        arr.push({author_name})
    }
    res.send({msg:arr.flat(Infinity)})
}
// /////////////////////////////////////////////////////////rep///////////
const Allbooks=async function(req,res){
    let savedata=await find({}).populate([{path:'auther_id'},{path:'publish_id'}])
    res.send({msg:savedata})
}
// /////////////////////////////////////////////////////////////////////rep//
const putbooks=async function(req,res){
    let savedata=await Book.find({$or:[{name:"Penguin"},{name:"Harper Collins"}]}).select({_id:1})
    let arr=[]
    for(let i=0;i<savedata.length;i++){
        const element=savedata[i]
        let  id=element._id
        let b=await Book.updateMany({publish_id:id},{isHardCover:true})
        arr.push(b)
    }
    res.send({msg:arr})
}


// /////////////////////////////////////////////////rep//////////////////////////
const updateBook=async function(req,res){
    let savedata=await userAuthor.find({rating:{$gt:3.5}}).select({_id:1})
    let arr=[]
    for(let i=0;i<savedata.length;i++){
        const element=savedata[i];
        let id=element._id
        let b=await Book.updateMany({author:id},{price:90})
        arr.push({msg:arr})
    }
    res.send({msg:arr})
}


 module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
 module.exports.createObject=createObject
module.exports.createBooks=createBooks
module.exports.findAuthor=findAuthor
module.exports.author=author
/////////////////////////////////////////
module.exports.updateBook=updateBook
module.exports.putbooks=putbooks
module.exports.Allbooks=Allbooks
















