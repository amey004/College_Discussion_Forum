const express = require("express");
const router = new express.Router();
const answer = require("../models/Answer")
const auth = require("../middleware/auth")

router.post("/",auth,async (req,res)=>{

})

module.exports = router;