const  Book = require('../../models/Book')



const createBook =  async(req,res,next) =>{
    try{
        const newBook =  Book.create({Bookname:req.body.Bookname,Author:req.body.Author,Description:req.body.Description})
        const createdBook = await newBook.save();
        
      res.status(201).json({
        Error: false,
        Message: 'Book created successfully',
        createdBook
      });
    }catch(error){
        console.log(error)
    }
}
module.exports = createBook