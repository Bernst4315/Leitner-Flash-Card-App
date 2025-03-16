import express from "express"
import { 
    getAllFlashcards,
    getFlashcard,
    createFlashcard,
    deleteFlashcard,
    editFlashcard
 } from "../controllers/flashcardController.js";

const cardRouter = express.Router();

cardRouter.get("/", getAllFlashcards);

cardRouter.get("/:id", getFlashcard);

cardRouter.post("/", createFlashcard);

cardRouter.delete("/:id", deleteFlashcard);

cardRouter.patch("/:id", editFlashcard);

export default cardRouter