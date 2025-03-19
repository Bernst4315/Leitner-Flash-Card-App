import { useState } from "react"

export default function DisplayDeck(){
    const [deck, setDeck] = useState(null)
    const [flip, setFlip] = useState(false)
    
    useEffect(() => {

        getDeckById()

    }, [getFlashcard])

    async function getDeckById () {
        const deck = await axios.get(`http://localhost:3000/api/decks/${id}`)
        setDeckTitle(deck.data.title)
        setDeck(deck.data.cards)
    }

    function toggle(flashcardID){
        
        setFlip((prevFlip) => ({...prevFlip, [flashcardID]: !prevFlip[flashcardID]}))
    
    }
    
    return(
        deck.map((flashcard) => (
            <div key={flashcard._id} className="flashcard border" onClick={toggle}>
                <p>{flip[flashcard._id] ? flashcard.back : flashcard.front}</p>
                {/* <div className="flashcard-btn">
                    <p className="border btn" onClick={(e) => deleteFlashcard(e)} id={flashcard._id}>Delete</p>
                    <p className="border btn">Edit</p>
                </div> */}
            </div>
        ))
    )
}