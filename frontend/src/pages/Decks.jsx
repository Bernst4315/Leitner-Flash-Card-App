import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

export default function Decks(){
    const navigate = useNavigate();

    const [decks, setDecks] = useState(null)

    async function getDecks(){
        const decks = await axios.get("http://localhost:3000/api/decks"); 
        setDecks(decks.data)
    }

    useEffect(() =>{
        getDecks();

    }, [])

    function goToDeck(e){
        console.log('click from goToDeck')
        console.log(decks)
        console.log(e.target.id);

        const deck = decks.find((deck) => deck.title === e.target.value && deck._id === e.target.id)
        //console.log(deck)
       // console.log(`this is the deck name: ${deck.title}`)
        //navigate(deck.title, deck._id)
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