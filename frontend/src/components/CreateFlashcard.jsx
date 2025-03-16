import { useState } from "react";
import axios from "axios";

export default function CreateFlashcard({updateFlashcardList}){
    
    const [flashcardFront, setFlashcardFront] = useState("");
    const [flashcardBack, setFlashcardBack] = useState("");

    async function handleSubmit(e){
        
        e.preventDefault(); 
      
        const flashcard = {
            front: flashcardFront,
            back: flashcardBack
        }

        const response = await axios.post("http://localhost:3000/api/flashcards", flashcard)

        if(response){

            updateFlashcardList(response.data)
            
            setFlashcardFront("")
            setFlashcardBack("")
           
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