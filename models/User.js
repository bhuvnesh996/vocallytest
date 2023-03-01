const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema(
    {
        UserName:{type:String,require:true,unique:true},
        Password:{type:String,require:true}
    },{
        collection:"User",
    }
)
module.exports =  mongoose.model('User', UserSchema)