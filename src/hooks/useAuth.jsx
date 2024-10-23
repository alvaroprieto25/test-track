// src/hooks/useAuth.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const useAuth = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (email, password, username) => {
    try {
      const user = await AuthService.register(email, password, username);
      console.log("Nuevo usuario registrado:", user);
      // Aquí guardar en localStorage el token y los datos del usuario si es necesario
      navigate('/dashboard');
    } catch (error) {
      setError("Error al registrar. Intenta de nuevo.");
      console.error("Error:", error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const user = await AuthService.login(email, password);
      console.log("Usuario logueado:", user);
      // Aquí guardar en localStorage el token y los datos del usuario si es necesario
      navigate('/dashboard');
    } catch (error) {
      setError("Error en la autenticación. Intenta de nuevo.");
      console.error("Error:", error);
    }
  };

  return { handleLogin, handleRegister, error, setError };
};

export default useAuth;
