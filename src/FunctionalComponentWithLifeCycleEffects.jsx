import { useEffect, useState } from 'react';

function FunctionalComponentWithLifeCycleEffects() {
  const [count, setCount] = useState(0);

  // After initial render
  useEffect(() => {
    console.log('Mounted!');

    // Before unmount
    return () => {
      console.log('Unmounting...');
    };
  }, []);

  // After every update or specific state change
  useEffect(() => {
    console.log('Updated!', count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}

export default FunctionalComponentWithLifeCycleEffects