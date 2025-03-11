import express from "express"

const router = express.Router();

router.get("/", (req,res) => {
    res.json({mssg: "All cards"})
})

router.get("/:id", (req,res) => {
    res.json({mssg: "a card"})
})

router.post("/", (req,res) => {
    res.json({mssg: "Made a card"})
})

router.delete("/:id", (req,res) => {
    res.json({mssg: "removed a card"})
})

router.patch("/:id", (req,res) => {
    res.json({mssg: "changed a card"})
})

export default router