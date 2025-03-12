import Button from "../components/Button"

export default function Home(){
    return (
        <div>
            <Button btnName={"Decks"} className="frontpage-btn" linkRef="/decks"/>
            <Button btnName={"Study"} className="frontpage-btn" linkRef="/study"/>
            <Button btnName={"All Flashcards"} className="frontpage-btn" linkRef="/allflashcards" />
        </div>
    )
}