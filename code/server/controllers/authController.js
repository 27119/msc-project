import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;


    if (!firstname || !lastname || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide all required information." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }


    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists. Please login." });
    }

  
    const hashedPassword = await hashPassword(password);


    const user = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: 0
    });

    await user.save();

    res
      .status(201)
      .json({ success: true, message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
};


export const loginController = async (req, res) => {
  try {
    const {email, password } = req.body;

  
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both email and password." });
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }

 
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ error: "User with this email does not exist. Please register." });
    }

   
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ error: "Incorrect email or password. Please try again." });
    }

  
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res
      .status(200)
      .json({ success: true, message: "Login successful.", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
};