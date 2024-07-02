import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./Pages/Home"
import New from "./Pages/New"
import Edit from "./Pages/Edit"
import Show from "./Pages/Show"
import Index from "./Pages/Index"
import Error from "./Pages/Error"
import NavBar from "./Components/NavBar"

const API = import.meta.env.VITE_API_URL

function App() {

  useEffect(() => {
    fetch(`${API}/workouts`)
    .then((res) => {
      return res.json()
    })
    .then((resJSON) => console.log(resJSON))
  }, [])

  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/workouts" element={ <Index/>} />
            <Route path="/workouts/:id" element={ <Show/> } />
            <Route path="/workouts/:id/edit" element={ <Edit/> } />
            <Route path="/workouts/new" element={ <New/> } />
            <Route path="*" element={ <Error/> } />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
