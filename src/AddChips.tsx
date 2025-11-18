import { useState } from "react";
import "./App.css";
import Tips from "./Tips.tsx"
import Alert from 'react-bootstrap/Alert';
// import React, { useState, useEffect } from "react";

type orderProps = {
  id: number
  order: number
  image: string
  description: string
  beverage: string
  extra: string
  food: string
  lastCreatedItem: string
  foodContainer: string
  beverages: string
  isSelected: boolean
  onSelected: (id: number) => void
  deleteSlide: (id: number) => void
}

export default function AddChips({ 
}: orderProps) {

const [food, setFood ] = useState([])

const foodContainer: HTMLElement | null = document.getElementById("food-container")

//fetch API data and place in foodContainer
async function onFetchFoodClick() {
    const response = await fetch("http://localhost:3005/special")
    const foodList = await response.json()
    setFood(foodList); 
}


let lastCreatedItem: { id: string; } | null = null
//Create new food item in API

  async function onCreateFoodClick() {
    const testFood = { description: "Mystery meat sandwich", beverage:"Dr. Pepper", extra:"bag of Doritos", order: "4", id:4 }
    const response = await fetch('http://localhost:3005/special', {
        method: 'POST', //creatin a new "special"
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(testFood) // takes any data and makes it a string for JSON
    });
    const newlyCreatedItem = await response.json()
    lastCreatedItem = newlyCreatedItem + 1
}

  async function onCreateFoodClick1() {
    
    const testFood = { description: "Turkey Day Special", beverage:"Apple Cider", extra:"Onion Rings", id:"5", order:"5" }
    const response = await fetch('http://localhost:3005/special', {
        method: 'POST', //creatin a new "special"
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(testFood) // takes any data and makes it a string for JSON
    });
    const newlyCreatedItem = await response.json()
    lastCreatedItem = newlyCreatedItem
}


//Update API
async function onUpdateFoodClick() {
    if(lastCreatedItem === null) {
        console.log ("No Item created to update")
        return
    }
await fetch('http://localhost:3005/special/' + lastCreatedItem.id, {
        method: 'PUT', //update API"
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ order: '*** Updat Test ***' }) // updates as a test for now..
    })
    const response = await fetch("http://localhost:3005/special")
    const foodList = await response.json()
    setFood(foodList);
    
}


// Alert function test
// function LinksExample() {
//   return (
//     <>
//       {[
//         'primary',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert with{' '}
//           <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
//           you like.
//         </Alert>
//       ))}
//     </>
//   );
// }


//Delete API
async function onDeleteFoodClick() {
    const itemToDelete = prompt('Enter order number to delete!');
    

//     // Use State hook for age
//     const [age, setAge] = useState(5);

//     // function to increse visits(age) by 1
// const incrementAge = () => {
//         setAge (age + 1);
//     }
//   {/* <p>Another Age: {age}</p> */}
//         <button onClick={incrementAge} className="btn btn-outline-primary m-2">{props.btn_title4}</button>


await fetch('http://localhost:3005/special/' + itemToDelete, {
        method: 'DELETE', //delete API"
       
    })
    const response = await fetch("http://localhost:3005/special")
    const foodList = await response.json()
    setFood(foodList);
}


  return (

  <>
    <div className="d-flex border border-secondary rounded-3 flex-column m-5 p-3">
      <Tips/>
    </div>

    <div className=" d-flex border border-secondary rounded-3 flex-column m-5 p-3">
      <h1 style={{ color: "#71bdddff" }}>This is your order</h1>
      <div>

            {/* <button onClick={updateName} className="btn btn-outline-primary m-2">{props.btn_title3}</button> */}
        {/* //buttons for fetch, add, update, delete from API */}
        <div className=" d-flex  bd-highlight ">
         <button onClick={onFetchFoodClick}  className="btn btn-primary m-2">Fetch Order</button>
         <button onClick={onCreateFoodClick}  className="btn btn-warning m-2" >Add Roast Beef</button>
          <button onClick={onCreateFoodClick1}  className="btn btn-warning m-2">Add Chicken sandwich</button>
         {/* <button onClick={onUpdateFoodClick}  className="btn- btn-secondary">Update Food Item</button>  */}
         <button onClick={onDeleteFoodClick}  className="btn btn-danger m-2">Delete Food Item</button>
         </div>

        <div id="food-container"></div>
        <script src="test.js"></script>

        {/* // button for adding to API */}
      
        
      </div>
      <center>
        {food.map((dataObj, index) => {
            console.log(food);
          return (
              <div className=" d-flex  border border-secondary rounded-3 flex-column p-2 m-2 shadow-sm ">
              <div className="d-inline-flex   ">
                   <p className="m-2">{`Order ${dataObj["order"] },`}</p>
                   <h5 className=" m-2 fw-bold">{ ` ${dataObj["description"] }, ice cold ${ dataObj["beverage"] }, and  ${ dataObj["extra"]} `}</h5>
                   </div>
                   
                
              </div>
          );
        })}
      </center>
    </div>
    </>
  );
}

