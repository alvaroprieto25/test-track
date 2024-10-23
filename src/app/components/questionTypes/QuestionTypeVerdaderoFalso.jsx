// src/app/components/questionTypes/QuestionTypeVerdaderoFalso.jsx
import React from 'react';

const QuestionTypeVerdaderoFalso = () => (
  <div>
    <h3>Respuesta de Verdadero o Falso</h3>
    <label>
      <input type="radio" name="vf" value="verdadero" />
      Verdadero
    </label>
    <label>
      <input type="radio" name="vf" value="falso" />
      Falso
    </label>
  </div>
);

export default QuestionTypeVerdaderoFalso;
