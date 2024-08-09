import  express  from "express";
import { loginController, registerController } from "../controllers/authController.js";

const authrouter=express.Router()

authrouter.post('/register', registerController)
authrouter.post('/login', loginController)


export default authrouter