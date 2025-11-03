import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
    <h1>Our Special of the day</h1>
    <p>Edit and add to you order to make it just right.</p>
      <input
        placeholder="Add to order"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="button" className="btn btn-secondary m-2" onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
