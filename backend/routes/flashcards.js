import express from "express"
import { 
    getAllFlashcards,
    getFlashcard,
    createFlashcard,
    deleteFlashcard,
    editFlashcard
 } from "../controllers/flashcardController.js";

const router = express.Router();

router.get("/", getAllFlashcards);

router.get("/:id", getFlashcard);

router.post("/", createFlashcard);

router.delete("/:id", deleteFlashcard);

router.patch("/:id", editFlashcard);

export default router