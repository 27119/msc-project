import  express  from "express";
import { createResearch, getAllResearch, getContentImage, getResearchById, getTopUsers } from "../controllers/contentController.js";

const contentRoute=express.Router()

contentRoute.post('/research', createResearch)
contentRoute.get('/get-research', getAllResearch)
contentRoute.get('/get-image/:id', getContentImage)
contentRoute.get('/getTopUsers', getTopUsers)
contentRoute.get('/get-research/:id', getResearchById);


export default contentRoute