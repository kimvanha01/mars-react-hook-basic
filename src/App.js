import React, { useCallback, useState } from 'react';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => { }, []);
  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Kim Van Ha" onClick={handleClick} />
    </div>
  );
}

export default App;