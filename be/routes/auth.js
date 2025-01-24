const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signinRoute = require("./signin");
const signupRoute = require("./signup");

// const User = require("../models/User");

// Use cors middleware with localhost origin
router.use("/", signinRoute);
router.use("/", signupRoute);
// Signup route
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     // const newUser = new User({ username, email, password: hashedPassword });
//     // await newUser.save();

//     // Generate JWT token
//     const token = jwt.sign({ userId: newUser._id }, "your_secret_key"); // Replace with your actual secret key

//     res.status(201).json({ message: "User created successfully", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Signin route

// Export the router
module.exports = router;
