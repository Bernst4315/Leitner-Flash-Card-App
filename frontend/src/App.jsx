import { useState } from 'react'
import './App.css'

import { Route, Routes } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Decks from './pages/Decks'
import Study from './pages/Study'
import CreateDeck from './pages/CreateDeck'
import CreateCard from './pages/CreateCard'
import Card from './pages/Card'

function App() { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/study" element={<Study />} />
        <Route path="/decks/newdeck" element={<CreateDeck />} />
        <Route path="/decks/newdeck/newcard" element={<CreateCard />}/>
        <Route path="/decks/newdeck/newcard/card" element={<Card />} />
      </Routes>
    </div>
  )
}

export default App
