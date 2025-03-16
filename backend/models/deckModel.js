import mongoose from "mongoose";

const Schema = mongoose.Schema;

const deckSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "New Deck"
    },

    cards:{
        type: Array,
        required: true,
        default: []
    }
})

const Deck = mongoose.model("Deck", deckSchema)

export default Deck 