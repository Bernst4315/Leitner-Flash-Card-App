import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

//Components
import CreateFlashcard from "../components/CreateFlashcard";
import DisplayDeck from "../components/DisplayDeck";

export default function Deck (){
    const [deckTitle, setDeckTitle] = useState(null)
    const [deck, setDeck] = useState(null)
    const [flip, setFlip] = useState(false)

    const { decktitle, id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {

        getDeckById()

    }, [getFlashcard])

    //Functions

    async function getDeckById () {
        const deck = await axios.get(`http://localhost:3000/api/decks/${id}`)
        setDeckTitle(deck.data.title)
        setDeck(deck.data.cards)
    }

    async function getFlashcard(newFlashcard){
        await axios.patch(`http://localhost:3000/api/decks/${id}`, { $push: {cards: newFlashcard}})
}

    function toggle(flashcardID){
        
        setFlip((prevFlip) => ({...prevFlip, [flashcardID]: !prevFlip[flashcardID]}))
    
    }

    function handleDelete(){
        axios.delete(`http://localhost:3000/api/decks/${id}`)
        navigate("/decks")
    }

    async function handleEdit(){
        navigate(`/decks/${decktitle}/${id}/edit`)
    }

    // async function deleteFlashcard(e){
    //     console.log(e.target.id)
    //     const flashcard = await axios.get(`http://localhost:3000/api/flashcards/${e.target.id}`)
    //     await axios.delete(`http://localhost:3000/api/flashcards/${e.target.id}`, flashcard)
    // }

    return (
        <div>
            {deckTitle && <h3>{deckTitle}</h3>}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
            <CreateFlashcard getFlashcard={getFlashcard} />
            {deck && deck.map((flashcard) => (
                <div key={flashcard._id} className="flashcard border" onClick={() => toggle(flashcard._id)}>
                    <p>{flip[flashcard._id] ? flashcard.back : flashcard.front}</p>
                    {/* <div className="flashcard-btn">
                        <p className="border btn" onClick={(e) => deleteFlashcard(e)} id={flashcard._id}>Delete</p>
                        <p className="border btn">Edit</p>
                    </div> */}
                </div>
            ))}
            <Link to="/decks">
                <button>Decks</button>
            </Link>
        </div>
    )
}