import React, { useState }  from 'react';

const CreateTest = () => {
    const [tipoRespuesta, setTipoRespuesta] = useState('');

    // Manejador de cambio para el select
    const manejarCambio = (e) => {
        setTipoRespuesta(e.target.value);
    };

    return(
        <div className='new-test'>
            <h2>Nuevo Test</h2>
            <h3>Nueva pregunta</h3>
            <form action="" className='new-question-form'>
                <input className='question-field' type='text' placeholder='Enunciado de la pregunta...' />
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
                {tipoRespuesta === 'test' && (
                    <div className='test-answers'>
                        <h3>Opciones para Tipo Test</h3>
                        <input className='answer' type="text" placeholder="Opción 1" />
                        <input className='answer' type="text" placeholder="Opción 2" />
                        <input className='answer' type="text" placeholder="Opción 3" />
                        <input className='answer' type="text" placeholder="Opción 4" />
                    </div>
                )}

                {tipoRespuesta === 'desarrollo' && (
                    <div>
                    <h3>Respuesta de Desarrollo</h3>
                    <textarea placeholder="Escribe tu respuesta aquí"></textarea>
                    </div>
                )}

                {tipoRespuesta === 'rango' && (
                    <div>
                    <h3>Respuesta de Rango</h3>
                    <label>
                        Mínimo: <input type="number" placeholder="Mínimo" />
                    </label>
                    <label>
                        Máximo: <input type="number" placeholder="Máximo" />
                    </label>
                    </div>
                )}

                {tipoRespuesta === 'verdaderoFalso' && (
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
                )}

                {/* Buttons */}
                <button className='button'>Nueva pregunta</button>
                <button className='button'>Finalizar test</button>
            </form>
        </div>
    );
};

export default CreateTest;