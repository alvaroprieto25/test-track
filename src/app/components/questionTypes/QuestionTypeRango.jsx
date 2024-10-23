// src/app/components/questionTypes/QuestionTypeRango.jsx
import React from 'react';

const QuestionTypeRango = () => (
  <div>
    <h3>Respuesta de Rango</h3>
    <label>
      Mínimo: <input type="number" placeholder="Mínimo" />
    </label>
    <label>
      Máximo: <input type="number" placeholder="Máximo" />
    </label>
  </div>
);

export default QuestionTypeRango;
