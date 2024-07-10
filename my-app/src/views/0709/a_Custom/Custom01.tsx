import React from 'react'
import { useCounter } from './hooks/useCounter'

//! Custom Hook 사용하기
// Custom Hook을 사용하는 것은 일반 Hook을 사용하는 것과 비슷

export default function Custom01() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(prevCount => prevCount + 1);
  // }

  // const decrement = () => {
  //   setCount(prevCount => prevCount - 1);
  // }

  // const reset = () => {
  //   setCount(0);
  // }

  const {count, increment, decrement, reset} = useCounter(10);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
