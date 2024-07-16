import React, { useCallback, useMemo, useRef, useState } from 'react';
import TodoList from './TodoList'; // 할 일 목록을 표시하는 컴포넌트
import Filters from './Filters'; // 필터 버튼을 표시하는 컴포넌트

//! TODO Project

//# 할 일(Todo) 타입 정의
// 고유 id: number;
// 할 일 내용: string;
// 완료 여부: boolean;
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const mockData=[
  {
    id:1,
    text:'리액트공부',
    completed:false
  },
  {
    id:2,
    text:'휴식',
    completed:true
  },
  {
    id:3,
    text:'자바스크립트 공부',
    completed:false
  },
]

//# 메인 컴포넌트
export default function Index() {
  //# 컴포넌트 내부 상태 관리
  // 1) 할 일 목록과 해당 목록의 상태 관리: 로컬 스토리지 훅을 사용하여 관리
  // : useLocalStorage 사용 (커스텀 훅)
  const [todos, setTodos] = useState<Todo[]>(mockData);

  // 2) 필터 상태 관리
  // : filter에 대한 값을 모두(all), 완료(completed), 미완료(active)의 문자열 값으로 관리
  // : useState 사용
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const nextIdRef = useRef(4);

  //# 이벤트 핸들러 정의 
  //? useCallback 사용 (할 일 목록, 할 일 목록의 상태로직 변경 시 함수 메모화)
  // 1) ~ 3)

  // 1) 새로운 할 일 추가 함수 (addTodo, 매개변수 text)
  // : 새 할 일 생성
  // : 기존 목록에 새 할 일 추가
  const addTodo = useCallback((text: string) => {
    setTodos((todos) => [
      ...todos, 
      {id: nextIdRef.current ++, text, completed: false}
    ]);
  }, [todos, setTodos]);

  // 2) 할 일 완료/미완료 토글 함수 (toggleTodo, 매개변수 id)
  // : 전체 할 일 목록 순회 > 매개 변수와 일치 할 경우 완료 여부 토글
  // : 변경된 목록 할 일 목록 상태 관리에 저장
  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }, [todos, setTodos]);

  // 3) 할 일 삭제 함수 (deleteTodo)
  // : 전체 할 일 목록 순회 > 매개 변수와 일치 하지 않는 값만 새로운 배열에 저장
  // : 변경된 목록 할 일 목록 상태 관리에 저장
  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, [todos, setTodos]);

  //? useMemo 사용 (할 일 목록, 필터링 값 상태 로직 변경 시 계산값 메모화)
  // 4) 필터에 따라 보여질 할 일 목록 계산
  // switch - case 사용으로 필터에 따라 할 일 목록 계산하여 반환
  const filteredTodo = useMemo(() => {
    switch(filter) {
      case 'all':
        return setTodos(todos);
      // case 'active':
      //   return setTodos()
      // case 'completed':

    }
  }, [todos, setTodos]);

  return (
    <div>
      <h1>Todo List</h1>
      {/* text 값을 입력 받는 input 창 */}
      <input 
        type="text" 
        placeholder='Add new Todo'
        onKeyDown={
          e => e.key === 'Enter' 
          && e.currentTarget.value 
          && addTodo(e.currentTarget.value)
        }
      />
      {/* 할 일 목록을 표시하는 컴포넌트 - todos, toggleTodo, deleteTodo의 props 전달 */}
      
      {/* +) todos 속성에는 필터링된 데이터를 전달 */}
      <TodoList todos={todos}/>

      {/* 필터 버튼을 표시하는 컴포넌트 - setFilter의 props 전달 */}
      <Filters />
    </div>
  )
}
