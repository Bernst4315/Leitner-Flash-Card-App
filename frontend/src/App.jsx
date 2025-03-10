import { useState } from 'react'
import './App.css'

import { Route, Routes } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Decks from './pages/Decks'
import Study from './pages/Study'

function App() { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  )
}

export default App
