import { useState } from 'react'
import './App.css'

import { Route, Routes, useParams } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Decks from './pages/Decks'
import Study from './pages/Study'
import CreateDeck from './pages/CreateDeck'
import CreateFlashcard from './components/CreateFlashcard'
import AllFlashcards from './pages/AllFlashcards'
import Deck from './pages/Deck'
import EditDeck from './pages/EditDeck'
import EditCard from './pages/EditCard'

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
        <Route path='/decks/:decktitle/:id' element={<Deck />}/>
        <Route path='/decks/:decktitle/:id/edit' element={<EditDeck />} />
        <Route path='/decks/:deckid/editcard/:id' element={<EditCard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
