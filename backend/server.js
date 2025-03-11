import express from "express"
import cors from "cors"

import connectDB from "./db.js";
import router from "./routes/cards.js";

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/cards", router)

connectDB(app); 