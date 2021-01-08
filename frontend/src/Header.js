import React, { useState } from 'react';

function Header({ children }) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      <h1>{children}</h1>;<h2>{counter}</h2>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default Header;
