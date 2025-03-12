import Button from "../components/Button";


//array of decks which is an array of flashcard objs

export default function Decks(){
    return(
     <>
        <h1>Your Decks</h1>
        <Button btnName="+" linkRef="/decks/newdeck" />
     </>
        
    )
}