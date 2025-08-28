import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import uploadRouter from "./routes/upload.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));


app.use("/api", uploadRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
