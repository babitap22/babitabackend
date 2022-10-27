const express = require('express');
const router = express.Router();
 const bookModel= require("../models/bookModel.js")

const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


router.post("/createBook",BookController.createBook)

 router.get("/getBooklist",BookController.bookList)


router.post("/bookList",BookController.myBookInYear)

router.post('/particularBook',BookController.getParticularBook)

router.get("/getINR",BookController.getXINRBooks)

router.get("/randomBooks",BookController.getRandomBooks)

module.exports = router;