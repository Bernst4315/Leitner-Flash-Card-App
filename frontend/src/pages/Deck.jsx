import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


import CreateFlashcard from "../components/CreateFlashcard";
import Flashcard from "../components/Flashcard";

export default function Deck (){

    //will need to create a patch request to deck in order to add cards

    const [deckTitle, setDeckTitle] = useState(null)
    const [deck, setDeck] = useState(null)
    const [flip, setFlip] = useState(false)

    const { id } = useParams(); 

    async function getDeckById () {
        const deck = await axios.get(`http://localhost:3000/api/decks/${id}`)
        console.log("from get deck by id")
        console.log(deck.data.cards)
        setDeckTitle(deck.data.title)
        setDeck(deck.data.cards)
    }

    async function getFlashcard(newFlashcard){
        //setFlashcards([newFlashcard, ...flashcards])
        //const flashCard = newFlashcard;
        const deck = await axios.patch(`http://localhost:3000/api/decks/${id}`, { $push: {cards: newFlashcard}})
        console.log("from getFlashcard")
        console.log(deck.data)
        console.log(newFlashcard)
        //return newFlashcard; 
}
    useEffect(() => {

        getDeckById()

    }, [])

    function toggle(flashcardID){
        
        setFlip((prevFlip) => ({...prevFlip, [flashcardID]: !prevFlip[flashcardID]}))
    
    }

    return (
        <div>
            {deckTitle && <h3>{deckTitle}</h3>}
            <CreateFlashcard getFlashcard={getFlashcard} />
            {deck && deck.map((flashcard) => (
                <p key={flashcard._id} className="flashcard border" onClick={() => toggle(flashcard._id)}>{flip[flashcard._id] ? flashcard.front : flashcard.back}</p>
            ))}
            <Link to="/decks">
                <button>Decks</button>
            </Link>
        </div>
    )
}