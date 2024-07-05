import React from 'react'
import { Todo } from './TodoApp';
import TodoItem from './TodoItem';

interface TodoListProsps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}



export default function TodoList({todos, toggleTodo, deleteTodo}: TodoListProsps) {

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}
          toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  )
}
