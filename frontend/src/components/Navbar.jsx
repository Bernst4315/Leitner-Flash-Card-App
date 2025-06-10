import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <Link to="/">
                <h1>Flashcard App</h1>
            </Link>
        </div>
    )
}