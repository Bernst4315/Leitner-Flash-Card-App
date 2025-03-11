import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flashcardSchema = new Schema ({
    front: {
        type: String,
        required: true
    },

    back: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

export default Flashcard