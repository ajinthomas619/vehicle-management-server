import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { vehicleRouter } from "./routes/vehicleRoutes.js";
import { authRouter } from "./routes/authRoutes.js";

dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.static("/public"));

app.use("/api/auth", authRouter);
app.use("/api/vehicle", vehicleRouter);

export {app}
