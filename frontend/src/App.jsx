import { useState } from 'react'
import './App.css'

import { Route, Routes } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Decks from './pages/Decks'

function App() { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Decks />} />
      </Routes>
    </div>
  )
}

export default App
