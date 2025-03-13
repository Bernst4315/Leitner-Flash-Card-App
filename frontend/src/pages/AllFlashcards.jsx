import { useEffect, useState } from "react"
import axios from "axios"

import Flashcard from "../components/Flashcard";
import CreateCard from "../components/CreateCard";

export default function AllFlashcards (){

    const [flashcards, setCards] = useState(null)

    async function getFlashcards(){
        const flashcards = await axios.get("http://localhost:3000/api/flashcards"); 
        setCards(flashcards.data)
    }
    
    useEffect(() => {
   
        getFlashcards()

    }, [])
    
    
    return(
        <div>
            <h1>All Flashcards</h1>
            <CreateCard />
            {flashcards && flashcards.map((flashcard) => {
                return(
                    <Flashcard flashcard={flashcard} key={flashcard._id} />
                )
            })}
        </div>
    )
}