import { useEffect, useState } from "react"
import axios from "axios"

import Flashcard from "../components/Flashcard";
import CreateFlashcard from "../components/CreateFlashcard";

export default function AllFlashcards (){

    const [flashcards, setFlashcards] = useState(null)

    async function getFlashcards(){
        const flashcards = await axios.get("http://localhost:3000/api/flashcards"); 
        setFlashcards(flashcards.data)
    }
    
    useEffect(() => {
   
        getFlashcards()

    }, [])
    
    function updateFlashcardList(newFlashcard){
            setFlashcards([newFlashcard, ...flashcards])
    }
    
    return(
        <div>
            <h1>All Flashcards</h1>
            <CreateFlashcard updateFlashcardList={updateFlashcardList}/>    
            {flashcards && flashcards.map((flashcard) => {
                return(
                    <Flashcard flashcard={flashcard} key={flashcard._id} />
                )
            })}
        </div>
    )
}