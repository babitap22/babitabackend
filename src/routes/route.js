const express = require('express');
const router = express.Router();///test-you
//importing a custom module

const module1=require('../logger/logger.js')
const module2=require('../util/helper')
const module3=require('../validator/formatter.js')


//importing external package
const underscore = require('underscore')
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module


    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    console.log(module1.welcome())
    console.log(module2.printDate())
    console.log(module2.printMonth())
    console.log(module2.getBathInfo())
    console.log(module3.trimm())
    console.log(module3.ChangeLowerCase())
    console.log(module3.ChangeUpperCase())


    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)


    let arr=["january","fabuary","march","april","may","june","july","august","september","october","november","december"]
    let chunkk=lodash.chunk(arr,4)
    console.log(chunkk);

    let odd=[1,3,5,7,9,11,13,15,17,19]
    let tai=lodash.tail(odd)
    console.log(tai)
    

    let a=[1,3,5]
    let b=[8,1,2,5,3,9]
    let c=[5,7,4,2,9]
    let d=[1,5,3,6,8]
    let e=[2,5,4]
    let x=lodash.union(a,b,c,d,e)
    console.log(x)

    let pair=[["name","Babita Pradhan"],["age",22],["Likes","pakoda"],["movie","sitaram"],["action","ditectivec"],["love","pravas"]]
    let from =lodash.fromPairs(pair)
    console.log(from)
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

