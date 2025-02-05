import React, { useReducer, useState } from 'react'

//! React 상태 관리
// : 컴포넌트의 동작과 렌더링을 제어하는 중요한 부분

//& 상태
// 컴포넌트의 변경 가능한 데이터를 의미
// : 사용자의 액션, 네트워크 응답 등에 의해 변경

//? 왜 상태 관리가 필요한가?
// 동적 UI 구현: 사용자의 입력, 서버 응답, 시간 경과 등 다양한 이벤트에 따라 UI를 업데이트해야 할 때 변화된 상태가 필요

// 컴포넌트 간의 데이터 공유: 서로 다른 컴포넌트 간에 상태를 공유하고, 이 상태를 기반으로 서로 영향을 주고받기 위해 각자의 컴포넌트가 상태를 관리하고 있어야 함

//? 상태 관리의 예시
// - 폼 입력 값 관리
// - 사용자 인터페이스 상태 (예: 열려 있는 드롭다운 메뉴)
// - 사용자 세션 데이터 (로그인 상태 등)

//& useReducer 사용 이유와 적합한 상황

// 1) 사용 이유
// 복잡한 상태 로직 관리
// 중앙 집중식 관리
// 테스트 용이성

// 2) 적합한 상황
// 복수의 하위 값이 있는 복잡한 상태 객체
// 상태 로직이 여러 이벤트에 걸쳐 있을 때
// 전역 상태의 로컬 관리

//! useState vs. useReducer

//? useState
// : React의 가장 기본적인 상태 관리 Hook
// : 간단한 상태 로직에서 사용하기 적합
// - 상태와 이 상태를 업데이트하는 함수를 제공

//* const [state, setState] = useState(initialState);

//? useReducer
// : 복잡한 상태 로직을 관리하는 데 useState보다 더 적합
// : 상태 업데이트 로직을 외부에서 선언할 수 있으므로 테스트와 재사용이 용이
// - reducer 함수와 초기 상태를 기반으로 상태와 dispatch 함수를 제공

//* const [state, dispatch] = useReducer(reducer, initialState);

// useReducer는 세 가지 주요 요소로 구성

// - Reducer 함수: 상태 변경 로직을 포함하고, 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환
// >> 상태 변경 로직을 포함하는 함수
// >> 이전 상태(state)와 액션 객체(action)를 인자로 받아 새로운 상태를 반환

// - Initial State: 리듀서의 초기 상태를 정의
// >> 상태의 초기 값. 컴포넌트가 처음 렌더링 될 때 사용되는 상태

// - Dispatch 함수: 액션을 발생시켜 상태를 업데이트하는 함수
// >> 이 함수에 액션을 전달하면 리듀서 함수가 호출되어 새로운 상태를 계산

// state: 현재 상태 값. useReducer를 통해 관리되는 상태

type CountState = {
  count: number;
}

type CounterAction = {
  type: 'increment' | 'decrement' | 'reset' | 'Five';
}

const initialState: CountState = {
  count: 0
}


// reducer 함수 : 현재의 상태값과 액션을 전달 받음
function reducer(state: CountState, action: CounterAction): CountState {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    case 'Five':
      return {count: 5};
    default:
      throw new Error('Unhandled action');
  }
}



export default function Reducer01() {

  const [count, setCount] = useState<number>(0);




  //! Reducer 사용 상태 관리

  // state: 현재의 상태값
  // dispatch: 액션을 Reducer 함수로 보내는 함수
  // reducer: 현재의 상태값과 액션을 인자로 전달받아 새로운 상태값을 반환
  const [state, dispatch] = useReducer(reducer, initialState);




  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  }



  return (
    <>
    <div>
      <h3>useState를 통한 상태 관리</h3>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>

    <div>
      <h3>useReducer 상태 관리</h3>
      <p>Current Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment'})}>+</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({ type: 'Five'})}>+5</button>
    </div>
    </>
  );
}
