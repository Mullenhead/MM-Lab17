import { useState } from 'react';
import Cookies_Button from "./Cookies_Button";


// // Function to add a cookie or other treat and increment the number
// function takes in two variables, name of extra and number of extra's, default is Cookies.
// I want to add pics of cookies incrementing by number

export default function Cookies(){

    const [extra, setExtra] = useState("Cookie");
    const [number, setNumber] = useState(1);

    return(
        <>
        <input value={extra} onChange={e => setExtra(e.target.value)} />
        <div className="container">
        <button className="btn btn-warning m-3" onClick={() => setNumber(number + 1)}> Add another sweet!</button>
      
        </div>
        {/* how can I make this button link in and increase number? */}
        <Cookies_Button/>
        <p className="fw-bold">You have {number} {extra}'s in your order.</p>
        </>
    );

}