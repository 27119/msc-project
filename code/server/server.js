import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authrouter from "./routes/authRoute.js";
import contentRoute from "./routes/contentRoute.js";
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());

//connect to database
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongodb ${connect.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`);
  }
};
connectDB();


app.use("/api/v1", authrouter)
app.use("/api/v1", contentRoute)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
