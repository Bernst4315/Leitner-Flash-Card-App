import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../components/Button";

export default function Decks(){

    const [decks, setDecks] = useState(null)

    async function getDecks(){
        const decks = await axios.get("http://localhost:3000/api/decks"); 
        setDecks(decks.data)
    }

    useEffect(() =>{
        getDecks();

    }, [])

    return(
     <>
        <h1>Your Decks</h1>
        {decks && decks.map((deck) => {
            return <button>{deck.title}</button>
        })}
        
        <Button btnName="+Deck" linkRef="/decks/newdeck" />
     </>
        
    )
}