import { useState, type SetStateAction } from 'react';

export default function AddIngredient() {
    const [text, setText] = useState(" Add something.");


    function handleChange(e: { target: { value: SetStateAction<string>; }; }) { setText(e.target.value); }
    return (
        <>
        <h4> Add your favorite ingredient</h4>
        <input value={text} onChange={handleChange} />
        <p> You have added: {text}</p>
        <div>
        <button className="btn btn-primary" onClick={ () => setText("ingredient")}> Reset this</button>
        </div>
        </>
    );
}