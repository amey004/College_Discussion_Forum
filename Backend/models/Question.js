const mongoose = require("mongoose");


const questionSchema = {
  userId: {
    type: String,
    required:true
  },
  UserName:{
    required:true,
    type:String
  },
  ansBy:{
    type:String,
  },
  que: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    trim: true,
  },
  type:{
    type:String,
    require:true,
  }
};

const Question = mongoose.model('question',questionSchema);

module.exports = Question;