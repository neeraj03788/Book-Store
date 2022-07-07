const express= require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller")

router.get("/", booksController.getallbooks);
router.post("/", booksController.addBook);
router.get("/:id",booksController.findBook);
router.put("/:id",booksController.updateitem);
router.delete("/:id",booksController.deleteBook);

module.exports = router;