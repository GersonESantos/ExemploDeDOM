import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
