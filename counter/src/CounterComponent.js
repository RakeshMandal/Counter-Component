import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <div style={styles.buttons}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
};

export default CounterComponent;
