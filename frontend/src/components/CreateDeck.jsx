import axios from "axios";
import { useState } from "react"

export default function CreateDeck(){
    const [deckTitle, setDeckTitle] = useState("");
    
    async function handleSubmit(e){
        e.preventDefault()
        
        const deck = {
            title: deckTitle
        }

        const response = await axios.post("http://localhost:3000/api/decks", deck)

        if(response){
            setDeckTitle("")
        }
        
        console.log('deck submit')
        
    }

    return(
        <div>
            <h4>Create Deck</h4>
            <form onSubmit={handleSubmit}>
                <label>Deck Name</label>
                <input 
                type="text"
                placeholder="Deck name..." 
                onChange={(e) => setDeckTitle(e.target.value)}
                />
                <button>Add deck</button>
            </form>
        </div>
    )
}