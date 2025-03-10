import Button from "../components/Button"

export default function Home(){
    return (
        <div>
            <h1>Leitner Flash Card App</h1>
            <Button btnName={"Decks"} className="frontpage-btn" />
            <Button btnName={"Study"} className="frontpage-btn"/>
            <footer>
            <p>Copyright 2025</p>
            </footer>
        </div>
    )
}