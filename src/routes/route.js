const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
/////////////////////////////////////////////////////////////////problem-1/////////////////////////////////////////////////////////////////////


router.get('/movie',function(req , res){
    let movie=['Rang de basanti','The shining','Lord of the rings','Batman begeain']
    res.send(movie)
})
/////////////////////////////////////////////////////////////////////problem-2/////////////////////////////////////////////////////////////////////////
router.get('/movie/:index',function(req , res){
    let movie=['Rang de basanti','The shining','Lord of the rings','Batman begeain']
    let index=req.params.index;
    res.send(movie[index])

})

//////////////////////////////////////////////////////////////////problem-3/////////////////////////////////////////////////////////////////////////
router.get('/movie/:index',function(req , req){
    let movie=['Rang de basanti','The shining','Lord of the rings','Batman begeain']
    let index=req.paramas.index;
    (index> movie.length)? 'please enter valid Index' : res.send(movie[index])
})
////////////////////////////////////////////////////////////////problem-4//////////////////////////////////////////////////////////////////////////////////////
router.get('/films',function(req,res){
    let filmName=[
         {
        "id": 1,
        "Name": "The Shining"
       },
        {
        "id": 2,
        "Name": "Incendies"
       },
        {
        "id": 3,
        "Name": "Rang de Basanti"
       }, 
       {
        "id": 4,
        "Name": "Finding Nemo"
       }
       ]
       res.send(filmName)
})
///////////////////////////////////////////////////////////////////problem-5/////////////////////////////////////////////////////////////////////////
router.get('/films/:filmId',function(req,res){
    let filmName=[
         {
        "id": 1,
        "Name": "The Shining"
       },
        {
        "id": 2,
        "Name": "Incendies"
       },
        {
        "id": 3,
        "Name": "Rang de Basanti"
       }, 
       {
        "id": 4,
        "Name": "Finding Nemo"
       }
    ]
      
    const filmId=req.params.filmId
    if(filmId>filmName.length){
        res.send('No movie exits with this Id')
    }
    else{
        res.send(filmName[filmId])
    }

})


module.exports = router;