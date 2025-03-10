import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() { 
  return (
    <div>
     <h1>Leitner Flash Card App</h1>
    <Button btnName={"Decks"} className="frontpage-btn" />
    <Button btnName={"Study"} className="frontpage-btn"/>
    </div>
  )
}

export default App
