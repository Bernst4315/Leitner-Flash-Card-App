import Button from "../components/Button";


//array of decks which is an array of flashcard objs
//deck will be an obj with an array of cards

export default function Decks(){
    const decks = [];
    const deck = {
        title: "deck one",
        cards: []
    }; 

    decks.push(deck)

    return(
     <>
        <h1>Your Decks</h1>
        {decks.map((deck) => (
            <button>{deck.title}</button>
        ))}
        
        <Button btnName="+Deck" linkRef="/decks/newdeck" />
     </>
        
    )
}