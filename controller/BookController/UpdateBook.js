const Book =  require('../../models/Book')

const updateBook =  async (req,res,next)=>{
    try{
        let {Bookname,Author,Description} = req.body;
        const updateData ={}
        if(Bookname) updateData.BookName = Bookname.trim();
        if(Author) updateData.Author = Author.trim();
        if(Description) updateData.Description = Description.trim();
        const book =  await Book.findOneAndUpdate({id:req.params.id,updateData},{new:true});

        res.status(200).json({
            Error:False,
            Message:"Book update Succes",
            book
        })

    }catch(error){
        console.log(error)
    }
}
module.exports = updateBook