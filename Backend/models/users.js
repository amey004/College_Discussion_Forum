const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    passwordHash :{
        type:String,
        required:true,
        trim:true,    
    }
})

const User = mongoose.model('user',userSchema);


module.exports = User;