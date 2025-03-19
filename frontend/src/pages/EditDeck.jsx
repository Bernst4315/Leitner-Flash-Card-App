import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

//Components
import CreateFlashcard from "../components/CreateFlashcard";
import DisplayDeck from "../components/DisplayDeck";

export default function EditDeck (){
    const [deckTitle, setDeckTitle] = useState(null)
    const [deck, setDeck] = useState(null)
    const [flip, setFlip] = useState(false)

    const { decktitle, id } = useParams() 
    const navigate = useNavigate()


    useEffect(() => {

        getDeckById()

    }, [])

    //Functions

    async function getDeckById () {
        const deck = await axios.get(`http://localhost:3000/api/decks/${id}`)
        setDeckTitle(deck.data.title)
        setDeck(deck.data.cards)
    }

    function toggle(flashcardId){
        console.log('from toggle')
        console.log(flashcardId)
        setFlip((prevFlip) => ({...prevFlip, [flashcardId]: !prevFlip[flashcardId]}))
    
    }

    async function handlesubmit(e){
        e.preventDefault();

        const newTitle = {
            title: deckTitle
        }

        await axios.patch(`http://localhost:3000/api/decks/${id}`, newTitle)
    }

    async function deleteFlashcard(e){
        console.log(e.target.id)
        const flashcardId = e.target.id;
        const flashcard = await axios.patch(`http://localhost:3000/api/decks/${id}`, { $pull: {cards: {_id: flashcardId} }})
        console.log(flashcard)

    }

    async function editFlashcard(e){
        const flashcardId = e.target.id;
        console.log(flashcardId)
        navigate(`/decks/${id}/editcard/${flashcardId}`)

    }

    return (
        <div>
            {deckTitle && <h3>{deckTitle}</h3>}
            <form onSubmit={(e) => handlesubmit(e)}>
                <label>Change title</label>
                <input type="text" onChange={(e) => (setDeckTitle(e.target.value))} />
                <button>edit</button>

            </form>
            {/* <CreateFlashcard getFlashcard={getFlashcard} /> */}
            {deck && deck.map((flashcard) => (
                <div key={flashcard._id} className="flashcard border" onClick={() => toggle(flashcard._id)}>
                    <p>{flip[flashcard._id] ? flashcard.back : flashcard.front}</p>
                    {<div className="flashcard-btn">
                        <p className="border btn" onClick={(e) => deleteFlashcard(e)} id={flashcard._id}>Delete</p>
                        <p className="border btn" onClick={(e) => editFlashcard(e)} id={flashcard._id}>Edit</p>
                    </div>}
                </div>
            ))}
            <Link to={`/decks/${decktitle}/${id}`}>
                <button>Cancel</button>
            </Link>
        </div>
    )
}