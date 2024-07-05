import React, { useEffect, useState } from "react";

export default function Effects03() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('최효정');

  // 마운팅 시 실행
  useEffect(()=> {
    console.log('Component mounted');

    return (() => {
      console.log('Component will unmounted');
    })
  }, [])

  // count가 업데이트될 때 실행
  useEffect(()=> {
    console.log(`count is ${count} 입니다`);
  }, [count])

  // name이 업데이트될 때 실행
  useEffect(() => {
    console.log(`name is ${name} 입니다`);
  }, [name])

  // 모든 렌더링마다 실행
  // : useEffect를 작성하지 않은 것과 동일한 효과
  useEffect(() => {
    console.log('컴포넌트가 리렌더링 됩니다.');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>

      <p>Name: {name}</p>
      <button onClick={() => setName(name === '최효정' ? '배유빈' : '최효정')}>Change Name</button>
    </div>
  );
}
