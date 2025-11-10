import { useState } from "react";
import "./App.css";
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
    const testFood = { title: "Create Test", order: 1 }
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
        body: JSON.stringify({ order: '*** Updat Test ***', genreId: 2 }) // updates as a test for now..
    })
    const response = await fetch("http://localhost:3005/special")
    const foodList = await response.json()
    setFood(foodList);
    
}


//Delete API
async function onDeleteFoodClick() {
    const itemToDelete = prompt('Enter order number to delete!');
  
await fetch('http://localhost:3005/special/' + itemToDelete, {
        method: 'DELETE', //delete API"
       
    })
     const response = await fetch("http://localhost:3005/special")
    const foodList = await response.json()
    setFood(foodList);
}


  return (
    <div className=" d-flex border border-secondary rounded-3 flex-column m-1 p-3">
      <h1 style={{ color: "#71bdddff" }}>This is your order</h1>
      <div>
        {/* //buttons for fetch, add, update, delete from API */}
         <button onClick={onFetchFoodClick}  className="btn- btn-primary">Fetch Food</button>
         <button onClick={onCreateFoodClick}  className="btn- btn-warning">Add Food Item</button>
         <button onClick={onUpdateFoodClick}  className="btn- btn-secondary">Update Food Item</button> 
         <button onClick={onDeleteFoodClick}  className="btn- btn-danger">Delete Food Item</button>

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
                   <p className="m-2">{`Order ${dataObj.order },`}</p>
                   <h5 className=" m-2 fw-bold">{ ` ${dataObj.description }, ice cold ${ dataObj.beverage }, and  ${ dataObj.extra} `}</h5>
                   </div>
                   
                
              </div>
          );
        })}
      </center>
    </div>
  );
}

