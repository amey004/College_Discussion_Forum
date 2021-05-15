const mongoose = require("mongoose")

const ansSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    questionId:{
        type:String,
    },
    answer:{
        type:String
    }
})

const answer = new mongoose.model("answers",ansSchema);


module.exports = answer;
