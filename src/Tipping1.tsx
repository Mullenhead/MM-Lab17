import { useState } from 'react';

export default function Tipping1() {
    const [liked, setLiked] = useState(true);

    function handleChange(e)
    {setLiked(e.target.checked);}

    return (
        <>
        <label className="m-1">
        <input 
          className="m-2"
          type="checkbox" 
          checked={liked} 
          onChange={handleChange}
        />
        I would like to tip with all my loose change.
        </label>
        <p className="fw-bold"> {liked ? "Gee, thanks." : " Was the food bad?"} </p>
        </>
    );
}