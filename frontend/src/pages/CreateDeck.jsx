import Button from "../components/Button";

export default function NewDeck(){
    return(
        <>
        <h4>Create Deck</h4>
        <Button btnName="+" linkRef="/decks/newdeck/newcard"/>
        </>
    )
}