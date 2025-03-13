import { useState } from 'react'
import './App.css'

import { Route, Routes } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Decks from './pages/Decks'
import Study from './pages/Study'
import CreateDeck from './pages/CreateDeck'
import CreateCard from './components/CreateFlashcard'
import AllFlashcards from './pages/AllFlashcards'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() { 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/study" element={<Study />} />
        <Route path='/allflashcards' element={<AllFlashcards />} />
        <Route path="/decks/newdeck" element={<CreateDeck />} />
        <Route path="/decks/newdeck/newcard" element={<CreateCard />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
