const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
//////////////////////////////////////////////////////////////////////////////////////////
router.post("/createAuthor", UserController.createObject)
 router.post("/createBooks",UserController.createBooks)
router.get("/getBooksbyChetanBhagat",UserController.getBooksbyChetanBhagat)
 router.get("/findAuthor",UserController.findAuthor)
 router.get("/author",UserController.author)
// ///////////////////////////////////////////////////////
 //router.get("/updateBook",UserController.updateBook)
//router.get("/putbooks",UserController.putbooks)
// router.get("/Allbooks",UserController.Allbooks)

module.exports = router;