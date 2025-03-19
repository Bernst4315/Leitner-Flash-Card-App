import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CreateFlashcard({updateFlashcardList, subject, addToDeck, getFlashcard}){
    
    const [flashcardFront, setFlashcardFront] = useState("");
    const [flashcardBack, setFlashcardBack] = useState("");

    const { decktitle } = useParams();
   

    async function handleSubmit(e){
        
        e.preventDefault(); 
    
        const flashcard = {
            subject: decktitle, 
            front: flashcardFront,
            back: flashcardBack
        }

        console.log(flashcard + " this is the flash card")

        const response = await axios.post("http://localhost:3000/api/flashcards", flashcard)

        if(response){
            const data = response.data
            getFlashcard(data)    
        }

        console.log("Submit")
        
    }

    
    
    return(
        <>
            <h4>Add Card</h4>
            <form onSubmit={handleSubmit}>
                <label>Front</label>
                <input 
                type="text" 
                placeholder="front..." 
                onChange={(e) => (setFlashcardFront(e.target.value))}
                value={flashcardFront}
                />
                <label>Back</label>
                <input 
                type="text" 
                placeholder="back..." 
                onChange={(e) => (setFlashcardBack(e.target.value))}
                value={flashcardBack}
                />

                <button>Add Flashcard</button>
            </form>
        </>
    )
}