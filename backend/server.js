import express from "express"
import cors from "cors"

import connectDB from "./db.js";

//routes
import cardRouter from "./routes/flashcards.js";
import deckRouter from "./routes/deck.js";

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/flashcards", cardRouter)
app.use("/api/decks", deckRouter)

connectDB(app); 