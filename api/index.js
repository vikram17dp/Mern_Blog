import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "../api/routes/auth.route.js";
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongoose is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(5000, (req, res) => {
  console.log(`server is running on port 5000!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
