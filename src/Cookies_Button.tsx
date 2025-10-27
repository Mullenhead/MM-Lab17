import { useState } from 'react';


export default function Cookies_Button (){
const [number, setNumber] = useState(1);

    return (
        <div className="container">
        <button className="btn btn-warning" onClick={() => setNumber(number + 1)}> ...Make this button work...</button>
        </div>
    )
}