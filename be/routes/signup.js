const express = require("express");
const router = express.Router();
const authModel = require("../lib/Schema/Authentication");
const { validateEmail, validateString } = require("../lib/utils/validators");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
router.post("/signup", async (req, res) => {
  try {
    try {
      var body = await req.body;
      //   console.log(body);
    } catch (error) {
      console.log(error.message);
      body = null;
    }
    if (!body) {
      return res.status(404).json({ error: "all fields are required!" });
    }
    var email = body.email;
    var password = body.password;
    var name = body.name;
    // console.log(body?.get("email"));
    if (!email || !password || !name) {
      return res.status(404).json({ error: "all fields are required!" });
    }
    if (!validateEmail(email)) {
      return res.status(422).json({ error: "invalid email" });
    } else if (!validateString(name)) {
      return res.status(422).json({ error: "invalid name" });
    }
    const userCheck = await authModel.findOne({ email });
    if (userCheck?.email) {
      return res.status(409).json({ error: "User Already Exists!" });
    } else {
      try {
        password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const newUser = new authModel({
          email,
          password,
          name,
        });

        await newUser.save();
        const payload = { email };
        const secretKey = process.env.JWT_KEY;
        const token = jwt.sign(payload, secretKey, { expiresIn: "10d" });

        return res.json({
          success: "account created successfully!",
          auth_token: token,
        });
      } catch (error) {
        console.log(error);
        return res
          .status(404)
          .json({ error: "An unknown error occured, Please try again later!" });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      error: "An unknown error occured, Please try again later!",
    });
  }
});
module.exports = router;
