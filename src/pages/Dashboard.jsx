
import React from 'react';
import Button from '../app/components/Button';
import useNavigateTo from '../hooks/useNavigateTo';

const Dashboard = () => {
  const { navigateTo } = useNavigateTo();

  return (
    <div className='dashboard'>
      <h1>Bienvenido al Panel del Profesor</h1>
      <div>
        <Button onClick={() => navigateTo('create-test')} className='button'>
          Crear un nuevo Test
        </Button>
        <Button className='button'>
          Mis Tests
        </Button>
      </div>
      <div>
        <h2>Mis Últimos Tests</h2>
      </div>
    </div>
  );
};

export default Dashboard;
