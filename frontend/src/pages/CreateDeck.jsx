import { Link } from "react-router-dom";
import Button from "../components/Button";
import CreateDeck from "../components/CreateDeck";

export default function NewDeck(){
    return(
        <>
        <CreateDeck />
        <Link to="/decks">
            <button>Decks</button>
        </Link>
        </>
    )
}