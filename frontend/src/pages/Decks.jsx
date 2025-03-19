import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

export default function Decks(){
    const navigate = useNavigate();

    const [decks, setDecks] = useState(null)

    useEffect(() =>{
        getDecks();

    })

    //Functions
    async function getDecks(){
        const decks = await axios.get("http://localhost:3000/api/decks"); 
        setDecks(decks.data)
    }


    function goToDeck(e){
        const deck = decks.find((deck) => deck.title === e.target.value && deck._id === e.target.id)
        navigate(`/decks/${deck.title}/${deck._id}`)
    }

    return(
     <>
        <h1>Your Decks</h1>
        <div className="deckList">
            {decks && decks.map((deck) => {
                return <button 
                key={deck._id} 
                onClick={goToDeck} 
                value={deck.title} 
                id={deck._id} 
                className="deck border"
                >{deck.title}</button>
            })}
        </div>
        <Button btnName="+Deck" linkRef="/decks/newdeck" />
     </>
        
    )
}