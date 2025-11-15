import PropTypes from "prop-types"

import React, {useState} from "react";
import StarRating from "./StarRating.tsx";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export default function UseProps(props) {


// button takes in "name you clicked me" prop for three clicks, then changes to another message
// let count = 0;
// const handleClick = (name: string) => {
//     if(count < 3){
//         count++;
//         console.log(`${name} you clicked me ${count} time/s`)
//     }
//     else{
//         console.log(`${name} stop clicking me!`)
//     }  
// }

// // button changes it's type on click
// const handleClick2 = (e: { target: { textContent: string; }; }) => {
//     e.target.textContent = "OUCH!";
//     }

// Use State hook for name and age
const [btnname, setBtnName] = useState("");
const [pname, setpName] = useState("Cherry Pie");
const [age, setAge] = useState(5);
const [rating, setRating] =useState(1);

// function to change name of pie
const updateName = () => {
    setpName ("Apple Pie");
}

// function to increse visits(age) by 1
const incrementAge = () => {
        setAge (age + 1);
    }

const incrementRating = () => {
    setRating (rating + 1);
}


    return(
       
        <>
        <div className=" d-inline-flex">
        <div className=" d-flex border border-primary flex-column p-3 m-3  rounded">
        <p className="small text-primary">Our Best Customer Award:</p>
        <h3 className="fw-bold">{props.name}</h3>
       
         {/* <p>Gives us: {rating} stars</p> */}
          <div className="App">
          {/* <p className="small text-primary">Customer's rating:</p> */}
            <StarRating />
             <p>Visits this year: {age}</p>
        </div>
        {/* this props key for alive uses a string literal, if true, returns Yes, if false, returns No */}
        <p>Loves our famous {pname} </p>
        <div className="d-flex flex-grow">
        {/* <button onClick={() => handleClick ("Susan")} className=" btn btn-primary m-2 "> {props.btn_title1}</button>
        <button onClick={(e) => handleClick2(e)} className="btn btn-secondary m-2"> {props.btn_title2}</button> */}

        {/* <p>Another Name: {pname}</p> */}
        <button onClick={updateName} className="btn btn-outline-primary m-2">{props.btn_title3}</button>

        {/* <p>incerment Age: {age}</p> */}
        <button onClick={incrementAge} className="btn btn-outline-primary m-2">{props.btn_title4}</button>

        {/* <p>incerment Rating: {age}</p> */}
        {/* <button onClick={incrementRating} className="btn btn-outline-primary m-2">{props.btn_title5}</button> */}


        {/* <button onClick={incrementAge } className="btn btn-outline-secondary m-2">{props.btn_title4}</button> */}
        </div>
    </div>
</div>
</>

    )
}
{/* Define prop types to avoid error messages on type of variable */}
UseProps.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    rating: PropTypes.number,
    alive: PropTypes.bool,
    btn_title1: PropTypes.string,
    btn_title2: PropTypes.string
}


{/* Define default prop when no information is called on the prop */}
UseProps.defaultProps = {
    name: "Mystery Customer",
    age: 33,
    alive: "true",
}
