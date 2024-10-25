import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/List/HomePage/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar>
    <Routes>
      <Route path='/Home' element={<Home />} />
    </Routes>
    </Navbar>
    </BrowserRouter>
  )
}

export default App
