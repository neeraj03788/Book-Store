const Book = require("../model/Book");
// const bodyParser= require("body-parser");

const getallbooks = async(req,res,next)=>{
    let books;
try {
    books = await Book.find();
} catch (error) {
    console.log(error)
}

if (!books){
    return res.status(404).json({message : "no products found"})
}
else{
    return res.status(200).json({books});
}

};

const addBook = async (req,res,next)=>{
   
    let book;
    try {
    book = new Book({
     name: req.body.name,
     author: req.body.author,
     description : req.body.description,
     price: req.body.price,
     available: req.body.available,
     image: req.body.image
    });
    await book.save();
}
catch(err){
    console.log(err)
}

if(!book){
    return res.status(500).json({message : "bad add request"})
}
else{
    return res.status(201).json({ book })
}
}
const findBook = async(req,res,next)=>{
     const id = req.params.id;
     
     let book;
    try{
        book = await Book.findById(id);

    }catch(err){
        console.log(err)
    }
    
if(!book){
    return res.status(500).json({message : "bad book found"})
}
else{
    return res.status(201).json({ book })
}
}
const updateitem = async(req,res,next)=>{

    const id = req.params.id;

    let book;

    try{
        book = await Book.findByIdAndUpdate(id,{
            name: req.body.name,
            author: req.body.author,
            description : req.body.description,
            price: req.body.price,
            available: req.body.available,
            image: req.body.image
        });
        book = await book.save();

    } catch(err){
        console.log(err)
    }
        
if(!book){
    return res.status(404).json({message : "unable to update"})
}
else{
    return res.status(200).json({ book });
}

}

const deleteBook= async(req,res,next)=>{
    const id = req.params.id;
    let book;

    try{
        book= await Book.findByIdAndRemove(id)
    }
    catch(err){
        console.log(err)
    }

    if(!Book){
        res.status(404).json({message: "not found book to delete for this id"})
    }
    else{
        res.status(200).json({ message: "product successfully deleted" })
    }
}
exports.getallbooks = getallbooks  ;
exports.addBook = addBook;
exports.findBook = findBook;
exports.updateitem = updateitem;
exports.deleteBook =deleteBook