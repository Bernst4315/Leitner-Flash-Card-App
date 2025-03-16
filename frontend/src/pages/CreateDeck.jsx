import Button from "../components/Button";
import CreateDeck from "../components/CreateDeck";

export default function NewDeck(){
    return(
        <>
        <CreateDeck />
        <Button btnName="+Card" linkRef="/decks/newdeck/newcard"/>
        </>
    )
}