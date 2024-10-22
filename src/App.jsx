import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTest from './components/CreateTest';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>TEST TRACKER</h1>
    </div>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-test" element={<CreateTest />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
