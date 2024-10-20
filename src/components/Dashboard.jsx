import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Bienvenido al Panel del Profesor</h1>
			<div>
      <button className='new-test-button'>Crear un nuevo Test</button>
      <button className='my-test-button'>Mis Tests</button>
			</div>
			<div>
					<h2>Mis Últimos Tests</h2>
			</div>
    </div>
  );
};

export default Dashboard;
