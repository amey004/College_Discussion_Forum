const express = require("express");
const router = new express.Router();
const Question = require("../models/Question");
const auth = require("../middleware/auth");

router.post("/",auth,async (req,res)=>{
    try {
        const {UserName,userId, que,type } = req.body;
        const newQuestion = new  Question({
            UserName,
            userId,
            que,
            type
        })

        const savedQuestion = await newQuestion.save();
        res.json(savedQuestion);

    } catch (error) {
        res.status(500).send(error);
    }
})


router.get("/",async (req,res)=>{
    try {
        const questions = await Question.find();
        res.send(questions);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/ans",auth,async(req,res)=>{
    try {
        const question = await Question.findOne({_id:req.body.id});
        await Question.findOneAndUpdate({_id:req.body.id},{answer:req.body.answer,ansBy:req.body.Name});
        res.json(question);
    } catch (error) {
        res.status(500).send()
    }
})
module.exports = router;