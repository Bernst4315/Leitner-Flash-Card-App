import Flashcard from "../models/flashCardModel.js";


const getAllFlashcards = async (req,res) => {
    
    try{
        const flashcards = await Flashcard.find();
        res.status(200).json(flashcards);

    }catch(err){
        res.send(400).json({err: message})
    }
}

const getFlashcard = async (req,res) => {
    try{
        const flashcard = await Flashcard.findById(req.params.id);
        res.status(200).json(flashcard);
    }catch(err){
        res.send(400).json({err: message})
    }
}

const createFlashcard = async (req,res) => {
    try{
        const flashcard = await Flashcard.create(req.body);
        console.log(req.body);
        res.status(201).json(flashcard);
    }catch(err){
        res.send(400).json({err: message})
    }
}

const deleteFlashcard = async (req,res) => {
    try{
        const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
        res.status(200).json(flashcard);
    }catch(err){
        res.send(400).json({err: message})
    }
}

const editFlashcard = async (req,res) => {
    try{
        const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(flashcard);
    }catch(err){
        res.send(400).json({err: message})
    }
}

export { 
    getAllFlashcards,
    getFlashcard,
    createFlashcard,
    deleteFlashcard,
    editFlashcard
}