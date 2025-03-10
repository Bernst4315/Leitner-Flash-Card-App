import Button from "../components/Button";

export default function CreateCard(){
    return(
        <>
            <h4>Add Card</h4>
            <Button btnName="+" linkRef="/decks/newdeck/newcard/card"/>
        </>
    )
}