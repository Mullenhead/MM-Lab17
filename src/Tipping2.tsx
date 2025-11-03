import { useState } from 'react';

export default function Tipping2() {
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
        I would like to tip $50.
        </label>
        <p className="fw-bold"> {liked ? "Thank you for your generousity" : " Was the service that bad?"} </p>
       
    </>
    );
}