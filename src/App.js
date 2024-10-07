import React, { useState } from 'react';

const App = () => {
  const [inputs, setInputs] = useState(['']); 

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value; 
    setInputs(newInputs);
  };

  const addInput = () => {
    setInputs([...inputs, '']); /*Los trs puntitos es para no ponerle un parámetro y que al momento de darle click empiece a poner los números */
  };

  const restInput = () => {
    if (inputs.length > 0) { /*Esta actividad ya la habíamos hecho, no así tal cual pero sí */
      setInputs(inputs.slice(0, -1)); 
    }
  };

  const total = inputs.reduce((acc, curr) => acc + (Number(curr) || 0), 0); /*rest y reduce se pueden usar jajaj nuevo descubrimiento */

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista dinámica semana 6</h1> 
      <h2>Aquí va el total chiqui jsjs: {total}</h2>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '20px' }}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type="number"
            value={input}
            onChange={(e) => handleChange(index, e.target.value)}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
        ))}
        <button onClick={addInput} style={{ padding: '10px', cursor: 'pointer', marginRight: '10px' }}> /*La neta esto sí lo investigue, porque no sabía como agregar estilos ni como ponerle color al botón */
          Ponle
        </button>
        <button onClick={restInput} style={{ padding: '10px', cursor: 'pointer' , backgroundColor: 'blue'}}> /*No funcionó jajaja , pero en la pra*/
          Quítale
        </button>
      </div>
    </div>
  );
};

export default App;
