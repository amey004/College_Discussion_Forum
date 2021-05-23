const express = require("express");
const User = require("../models/users");
const router = new express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  try {
    const { firstName ,lastName ,email, password, passwordVerify } = req.body;
    if (!email || !password || !passwordVerify || !firstName || !lastName)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields!" });

    if (password.length < 7)
      return res
        .status(400)
        .json({ errorMessage: "Password should be atleast 7 characters!" });

    if (password !== passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Passwords does not match!" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({
          errorMessage: "An account with same email address already exists!",
        });

    //hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //save a new user to database

    const newUser = new User({
      firstName,
      lastName,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    //log the userin

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    //send the token  in HTTP-only cookie

    res.cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {

    res.status(500).json({errorMessage:error});
  }
});
    //login 

router.post("/login",async (req,res)=>{

        try {
            
            const {email,password} = req.body;

            if(!email || !password){
                return res.status(400).json({errorMessage:"Enter all required fields."})
            }

            const existingUser =await User.findOne({email})
            if(!existingUser){
                return res.status(401).json({errorMessage:"Wrong email or password!"})
            }

            const passwordCorrect = await bcrypt.compare(password,existingUser.passwordHash);
            if(!passwordCorrect){
                return res.status(401).json({errorMessage:"Wrong email or password!"})
            }

            //sign the token

                const token = jwt.sign(
                  {
                    user: existingUser._id,
                  },
                  process.env.JWT_SECRET
                );

                //send the token  in HTTP-only cookie

                res.cookie("token", token, {
                    httpOnly: true,
                  }).send();


        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
    })

router.get("/logout",(req,res)=>{
    res.cookie("token","",{
        httpOnly:true,
        expires:new Date(0)
    }).send();
})


router.get("/loggedIn",(req,res)=>{
      try {
        const token = req.cookies.token;
        if (!token) {
          return res.json(false);
        }

        jwt.verify(token, process.env.JWT_SECRET);

        res.json(true);
      } catch (error) {
        console.error(error);
        res.json(false);
      }
})
router.get("/user",auth,async (req,res)=>{
  try {
      const user = await User.findOne({_id:req.user});
      res.json(user);
  } catch (error) {
    console.log(error);
    res.json()
  }
})
module.exports = router;    