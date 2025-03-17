import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


import CreateFlashcard from "../components/CreateFlashcard";

export default function Deck (){
    const [deckTitle, setDeckTitle] = useState(null)

    const { id } = useParams(); 

    async function getDeckById () {
        const deck = await axios.get(`http://localhost:3000/api/decks/${id}`)
        console.log(deck.data)
        setDeckTitle(deck.data.title)
    }


    useEffect(() => {

        getDeckById()

    }, [])

    return (
        <div>
            {deckTitle && <h3>{deckTitle}</h3>}
            <CreateFlashcard />
            <Link to="/decks">
                <button>Decks</button>
            </Link>
        </div>
    )
}