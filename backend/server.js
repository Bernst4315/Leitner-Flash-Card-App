import express from "express"
import cors from "cors"

import connectDB from "./db.js";
import cardRouter from "./routes/flashcards.js";

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/flashcards", cardRouter)

connectDB(app); 