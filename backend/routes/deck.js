import express from "express"
import { 
    getAllDecks,
    getDeck,
    createDeck,
    deleteDeck,
    editDeck
 } from "../controllers/deckController.js";

const deckRouter = express.Router();

deckRouter.get("/", getAllDecks);

deckRouter.get("/:id", getDeck);

deckRouter.post("/", createDeck);

deckRouter.delete("/:id", deleteDeck);

deckRouter.patch("/:id", editDeck);

export default deckRouter