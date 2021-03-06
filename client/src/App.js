import './App.css'
import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App