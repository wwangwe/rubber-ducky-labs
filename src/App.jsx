import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Footer } from './layouts'
import { Routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
