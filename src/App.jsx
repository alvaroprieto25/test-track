// src/app/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './app/components/Header';
import AppRoutes from './app/routes/AppRoutes';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='content-conteiner'>
      <Router>
        <AppRoutes />
      </Router>
      </div>
    </>
  );
}

export default App;
