const express = require("express");
const mongoose=require("mongoose");
const User=require("../models/userModels")

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the email already exists, respond with a custom error message
      return res.status(409).json({ error: "Email already exists" });
    }

    // If the email doesn't exist, create the user
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//get
 router.get("/", async (req, res) => {
    try {
      const showAll = await User.find();
      res.status(200).json(showAll);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

//get a single user
 router.get("/:id", async (req, res) => {
    const {id}=req.params;
    try {
      const singleUser = await User.findById({_id:id});
      res.status(200).json(singleUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

//delete a single user
 router.delete("/:id", async (req, res) => {
    const {id}=req.params;
    try {
      const singleUser = await User.findByIdAndDelete({_id:id});
      res.status(200).json(singleUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

//put/patch
 router.patch("/:id", async (req, res) => {
    const {id}=req.params;
    const {name,email,age}=req.body;
    try {
      const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).json(updateUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

module.exports=router;