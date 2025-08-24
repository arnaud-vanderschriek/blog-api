import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import loginRouter from "./routes/login.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/login", loginRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
