// src/pages/Login.jsx
import { useState } from "react";
import useAuth from '../hooks/useAuth';
import InputField from '../app/components/InputField';
import Button from '../app/components/Button';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { handleLogin, handleRegister, error, setError } = useAuth();

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(""); // Resetear errores antes de la acción
    if (isSignup) {
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }
      handleRegister(email, password, username);
    } else {
      handleLogin(email, password);
    }
  };

  return (
    <div className="login-page">
      <h2>{isSignup ? 'Registrarse' : 'Iniciar Sesión'}</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <InputField
          type="email"
          value={email}
          maxLength={50}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo Electrónico"
          required
        />
        {isSignup && (
          <InputField
            type="text"
            value={username}
            maxLength={30}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            required
          />
        )}
        <InputField
          type="password"
          value={password}
          maxLength={20}
          minLength={10}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        {isSignup && (
          <InputField
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar Contraseña"
            required
          />
        )}
        {!isSignup ? (
          <div>
            <Button className="button" type="submit">Iniciar Sesión</Button>
            <Button className="button" onClick={toggleSignup}>Registrarse</Button>
          </div>
        ) : (
          <div>
            <Button className="button" type="submit">Confirmar</Button>
            <Button className="button" onClick={toggleSignup}>Ya tengo una cuenta</Button>
          </div>
        )}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
