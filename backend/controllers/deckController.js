import Deck from "../models/deckModel.js";


const getAllDecks = async (req,res) => {
    
    try{
        const decks = await Deck.find();
        res.status(200).json(decks);

    }catch(err){
        res.send(400).json({message: err})
    }
}

const getDeck = async (req,res) => {
    try{
        const deck = await Deck.findById(req.params.id);
        res.status(200).json(deck);
    }catch(err){
        res.send(400).json({message: err})
    }
}

const createDeck = async (req,res) => {
    try{
        const deck = await Deck.create(req.body);
        console.log(req.body);
        res.status(201).json(deck);
    }catch(err){
        res.send(400).json({message: err})
    }
}

const deleteDeck = async (req,res) => {
    try{
        const deck = await Deck.findByIdAndDelete(req.params.id);
        res.status(200).json(deck);
    }catch(err){
        res.send(400).json({message: err})
    }
}

const editDeck = async (req,res) => {
    try{
        const deck = await Deck.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(deck);
    }catch(err){
        res.send(400).json({message: err})
    }
}

export { 
    getAllDecks,
    getDeck,
    createDeck,
    deleteDeck,
    editDeck
}