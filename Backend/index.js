const express = require('express')
const cors = require('cors')
require('dotenv').config();
require("./db/mongoose");
const cookieParser =  require("cookie-parser")


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));


const port = process.env.PORT;
console.log("starting server");
app.listen(port,()=> console.log(`Server started on port: ${port}`));



app.use("/auth",require("./routers/user"));
app.use("/customer",require("./routers/customerRouter"));
app.use("/addquestion",require("./routers/questionRouter"))




