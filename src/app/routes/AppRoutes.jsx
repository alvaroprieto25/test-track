// src/app/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';
import CreateTest from '../../pages/CreateTest';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-test" element={<CreateTest />} />
    </Routes>
  );
}

export default AppRoutes;
