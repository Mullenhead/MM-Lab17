import { useState } from 'react';
import AddTodo from './AddTodo.tsx';
import TaskList from './TaskList.tsx';

let nextId = 3;
const initialTodos = [
  { id: 0, title: '  Large Itilian with the works ', done: true },
  { id: 1, title: '  Large Pepsi', done: true },
  { id: 2, title: '  Cape Cod BBQ chips', done: true },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title: any) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo: any) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId: any) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
