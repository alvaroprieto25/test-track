import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Ruta para la página de registro */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el dashboard del profesor */}
      </Routes>
    </Router>
    </>
  )
}

export default App
