import express from "express"

const router = express.Router();

router.get("/", (req,res) => {
    res.json({mssg: "All flashcards"})
})

router.get("/:id", (req,res) => {
    res.json({mssg: "a flashcard"})
})

router.post("/", (req,res) => {
    res.json({mssg: "Made a flashcard"})
})

router.delete("/:id", (req,res) => {
    res.json({mssg: "removed a flashcard"})
})

router.patch("/:id", (req,res) => {
    res.json({mssg: "changed a flashcard"})
})

export default router