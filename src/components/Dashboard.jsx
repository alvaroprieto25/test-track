import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

const Dashboard = () => {

  
  const navigate = useNavigate();

  const navigateToCreateTest = () => {
    navigate('/create-test')
  };

  return (
    <div>
      <h1>Bienvenido al Panel del Profesor</h1>
			<div>
      <button onClick={navigateToCreateTest} className='new-test-button'>Crear un nuevo Test</button>
      <button className='my-test-button'>Mis Tests</button>
			</div>
			<div>
					<h2>Mis Últimos Tests</h2>
			</div>
    </div>
  );
};

export default Dashboard;
