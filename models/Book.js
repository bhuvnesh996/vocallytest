const mongoose = require('mongoose');

const BookSchema = mongoose.Schema(
    {
        Bookname:{type:String,required:true},
        Description:{type:String},
        Author:{type:String},
        User:{type:mongoose.Schema.Types.ObjectId, ref:'User'}

    },{
        colletion:'Book'
    }
)

module.exports= mongoose.model('Book',BookSchema)