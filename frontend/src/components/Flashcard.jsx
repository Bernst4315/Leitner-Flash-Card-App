export default function  Flashcard({flashcard}){
    return(
        <div className="border flashcard">
            <p>{flashcard.front}</p>
            <p>{flashcard.back}</p>
        </div>
    )
}