const mongoose = require("mongoose");
require('dotenv').config();

console.log("Connecting to MongoDB")

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
},()=>{
  console.log('Connected to MongoDB')
});
