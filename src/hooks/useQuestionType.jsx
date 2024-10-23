// src/hooks/useQuestionType.js
import { useState } from 'react';

const useQuestionType = () => {
  const [tipoRespuesta, setTipoRespuesta] = useState('');

  const manejarCambio = (e) => {
    setTipoRespuesta(e.target.value);
  };

  return { tipoRespuesta, manejarCambio };
};

export default useQuestionType;
