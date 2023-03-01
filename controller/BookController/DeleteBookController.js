const  Book = require('../../models/Book')

const deleteBook = async (req,res,next)=>{
    try{
        const del =  await Book.findByIdAndDelete(req.params.id)
        res.status(201).json({
            Error: false,
            Message: 'Book deleted successfully',
          
          });

    }catch(error){
        console.log(error)
    
    }   
}

module.exports =  deleteBook