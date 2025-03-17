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
        console.log(e.target.value);

        const deck = decks.find((deck) => deck.title === e.target.value)
        //console.log(deck)
        console.log(`this is the deck name: ${deck.title}`)
        navigate(deck.title)
        //navigate(`/decks/${decks.title}`)
    }

    return(
     <>
        <h1>Your Decks</h1>
        {decks && decks.map((deck) => {
            return <button key={deck._id} onClick={goToDeck} value={deck.title} >{deck.title}</button>
        })}
        
        <Button btnName="+Deck" linkRef="/decks/newdeck" />
     </>
        
    )
}