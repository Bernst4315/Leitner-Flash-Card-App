import Button from "../components/Button";

export default function Decks(){
    return(
     <>
        <h1>Your Decks</h1>
        <Button btnName="+" linkRef="/decks/newdeck" />
        <Button btnName="Home" linkRef="/" />
     </>
        
    )
}