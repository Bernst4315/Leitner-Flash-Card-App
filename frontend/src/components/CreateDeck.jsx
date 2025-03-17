import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import CreateFlashcard from "./CreateFlashcard";

export default function CreateDeck(){
    const [deckTitle, setDeckTitle] = useState("");
    //const [flashCard, setFlashCard] = useState();
    const navigate = useNavigate(); 
    
    async function handleSubmit(e){
        e.preventDefault()
        
        const deck = {
            title: deckTitle,
            cards: []
        }

        const response = await axios.post("http://localhost:3000/api/decks", deck)

        if(response){
            setDeckTitle("")
            navigate(`/decks/${deckTitle}`)
        }
        
        console.log('deck submit')
        addToDeck();
        
    }

    // function addToDeck(newFlashcard){
    //     console.log(newFlashcard)
    //     setFlashCard([newFlashcard, ...flashCard])
    // }

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
                {/*deckTitle && <CreateFlashcard subject={deckTitle} addToDeck={addToDeck}/>*/}
                {/* <Link to="/decks"> */}
                    <button >Add deck</button>
                {/* </Link> */}
            </form>
        </div>
    )
}