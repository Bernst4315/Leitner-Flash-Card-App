import Button from "../components/Button";

export default function CreateCard(){
    return(
        <>
            <h4>Add Card</h4>
            <form action="">
                <input type="text" placeholder="front of card"/>
                <input type="text" placeholder="back of card"/>
                <input type="submit" />
            </form>
        </>
    )
}