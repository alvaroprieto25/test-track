// src/Login.jsx
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';  // Importar useNavigate



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  }


// Función para registrar un nuevo usuario
const handleRegister = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registro exitoso
      const user = userCredential.user;
      updateProfile(user, {
        displayName: username,
      }).then(() => {
        console.log("Nuevo usuario registrado:", user);
        //Esto debe guardar en el local storage el token del usuario

        //Ademas debe guardar los datos del usuario en la storage

        //Y finalmente redirigir a la pantalla principal del profesor.
        navigate('/dashboard');
      })
      .catch((err) => {
        setError("Error al registrar. Intenta de nuevo.");
        console.error("Error:", error);
      })
    })
    .catch((error) => {
      setError("Error al registrar. Intenta de nuevo.");
      console.error("Error:", error);
    });
};


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log("Usuario logueado:", user);
        //Esto debe guardar en el local storage el token del usuario

        //Ademas debe guardar los datos del usuario en la storage

        //Y finalmente redirigir a la pantalla principal del profesor.
        navigate('/dashboard');
      })
      .catch((error) => {
        // Manejar errores de autenticación
        setError("Error en la autenticación. Intenta de nuevo.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={isSignup ? handleRegister : handleLogin}>
        <input
          className="email-field"
          type="email"
          value={email}
          maxLength={50}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo Electrónico"
          required
        />
        {isSignup &&
          <input
          className="username-field"
          type="text"
          value={username}
          maxLength={30}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
          required
        />
        }
        <input
          className="password-field"
          type="password"
          value={password}
          maxLength={20}
          minLength={10}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        {isSignup && <input
          className="password-field"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar Contraseña"
          required
        />}
        {!isSignup ?
        <div>
          <button className="signin-button" type="submit">Iniciar Sesión</button>
          <button className="signup-button" onClick={toggleSignup} >Registrarse</button>
        </div>
        :
        <div>
          <button className="signup-button" type="submit">Confirmar</button>
          <button className="signup-button" onClick={toggleSignup} >Ya tengo una cuenta</button>
        </div>
        }
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
