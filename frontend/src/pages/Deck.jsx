import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


import CreateFlashcard from "../components/CreateFlashcard";

export default function Deck (){

    //will need to create a patch request to deck in order to add cards

    const [deckTitle, setDeckTitle] = useState(null)

    const { id } = useParams(); 

    async function getDeckById () {
        const deck = await axios.get(`http://localhost:3000/api/decks/${id}`)
        console.log(deck.data)
        setDeckTitle(deck.data.title)
    }

    async function getFlashcard(newFlashcard){
        //setFlashcards([newFlashcard, ...flashcards])
        //const flashCard = newFlashcard;
        const deck = await axios.patch(`http://localhost:3000/api/decks/${id}`, { $push: {cards: newFlashcard}})
        console.log("from getFlashcard")
        console.log(newFlashcard)
        //return newFlashcard; 
}
    useEffect(() => {

        getDeckById()

    }, [])

    return (
        <div>
            {deckTitle && <h3>{deckTitle}</h3>}
            <CreateFlashcard getFlashcard={getFlashcard} />
            <Link to="/decks">
                <button>Decks</button>
            </Link>
        </div>
    )
}