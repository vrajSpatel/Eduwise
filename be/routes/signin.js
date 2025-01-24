const express = require("express");
const router = express.Router();
const authModel = require("../lib/Schema/Authentication");
const { validateEmail } = require("../lib/utils/validators");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/signin", async (req, res) => {
  const body = await req.body;
  var email = body.email;
  if (!email) {
    return res.status(404).json({ error: "email id is required" });
  }
  var password = body.password;
  if (!password) {
    return res.status(404).json({ error: "password is required" });
  }
  // console.log(email, password);
  if (!validateEmail(email)) {
    return res.status(422).json({ error: "invalid email" });
  }

  const userCheck = await authModel.findOne({ email });
  if (!userCheck) {
    return res
      .status(404)
      .json({ error: "user not found in the records! please signup:)" });
  }
  try {
    const passwordMatch = bcrypt.compareSync(password, userCheck.password);
    if (passwordMatch) {
      const payload = { email };
      const secretKey = process.env.JWT_KEY;
      const token = jwt.sign(payload, secretKey, { expiresIn: "10d" });
      return res.status(200).json({
        success: "password matched",
        auth_token: token,
      });
    } else {
      return res.status(401).json({ error: "password is incorrect" });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "password doesn't match!" });
  }
});
module.exports = router;
