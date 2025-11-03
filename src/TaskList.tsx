import { useState } from 'react';

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </div>
      ))}
    </>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button type="button" className="btn btn-outline-secondary m-2" onClick={() => setIsEditing(true)}>
          Edit item
        </button>
      </>
    );
  }
  return (
    <label className=" d-flex border border-secondary rounded-3  m-2 p-2">
        <div >
      <input 
        type="checkbox" 
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      
      {todoContent}
      <button type="button" className="btn btn-outline-secondary" onClick={() => onDelete(todo.id)}>
        Delete item
      </button>
      </div>
    </label>
  );
}