// src/pages/CreateTest.jsx
import React from 'react';
import useQuestionType from '../hooks/useQuestionType';
import Button from '../app/components/Button';
import InputField from '../app/components/InputField';
import QuestionTypeTest from '../app/components/questionTypes/QuestionTypeTest';
import QuestionTypeDesarrollo from '../app/components/questionTypes/QuestionTypeDesarrollo';
import QuestionTypeRango from '../app/components/questionTypes/QuestionTypeRango';
import QuestionTypeVerdaderoFalso from '../app/components/questionTypes/QuestionTypeVerdaderoFalso';

const CreateTest = () => {
  const { tipoRespuesta, manejarCambio } = useQuestionType();

  return (
    <div className='new-test'>
      <h2>Nuevo Test</h2>
      <h3>Nueva pregunta</h3>
      <form className='new-question-form'>
        <InputField className='question-field' type='text' placeholder='Enunciado de la pregunta...' />
        <div className='question-type-field'>
          <label htmlFor="tipoRespuesta">Selecciona el tipo de respuesta:</label>
          <select id="tipoRespuesta" value={tipoRespuesta} onChange={manejarCambio}>
            <option value="">-- Selecciona una opción --</option>
            <option value="test">Tipo Test</option>
            <option value="desarrollo">Desarrollo</option>
            <option value="rango">Rango</option>
            <option value="verdaderoFalso">Verdadero o Falso</option>
          </select>
        </div>

        {/* Renderizado condicional basado en el tipo de respuesta */}
        {tipoRespuesta === 'test' && <QuestionTypeTest />}
        {tipoRespuesta === 'desarrollo' && <QuestionTypeDesarrollo />}
        {tipoRespuesta === 'rango' && <QuestionTypeRango />}
        {tipoRespuesta === 'verdaderoFalso' && <QuestionTypeVerdaderoFalso />}

        {/* Botones */}
        <Button className='button'>Nueva pregunta</Button>
        <Button className='button'>Finalizar test</Button>
      </form>
    </div>
  );
};

export default CreateTest;
