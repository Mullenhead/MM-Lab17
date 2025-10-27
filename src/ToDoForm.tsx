import React, {useState} from  "react";
import { v4 as uuidv4 } from "uuid"; // 32 bit random generator for a unique ID

export default function TodoForm({addTodo}) {
//const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()

    // create new todo object
    const newTodo = {
        id: uuidv4(),  // creates unique ID
        text: todo,
        isCompleted: false,
        }
        
        addTodo(newTodo); // executes addTodo function passsed from App
        setTodo("");
    }
        const handleChange = (e) => {
        setTodo(e.target.value)        
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="todoTitle">Todo: </label>
            <input
            type="text"
            id="todoTitle"
            value={todo}
            onChange = {handleChange}
            />
            <button className="btn btn-success">Add</button>
        </form>
    )
}

