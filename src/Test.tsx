import { useState } from 'react';
import Test_Button from "./Test_Button.tsx";

//How to look at API db.json/menu/beverages?
const foodContainer = document.getElementById("menu.id")

export default function Test() {
     const resoponse = fetch("http://localhost:3005/menu")
     const data = resoponse.json()
     // is the data showing up from the API?
          console.log(data)
return (
//List the API/db.json/menu/beverages
          foodContainer.innerHTML = menu.map(
               food => <div className="d-flex border border-secondary rounded-3 flex-column p-2 m-3 shadow">
              <h3>${menu.sandwiches}</h3>
               <p>${menu.beverages}</p>
               <p>${menu.chips}</p>
               <p>${menu.extra}</p>
               </div>
          ).join("")
          )
     }

          async function onCreateFoodClick(){
               const testFood = {title: "Test", genreId: 1 }
               const response = await fetch ( "http://localhost:3005/beverages",{
                    method: "post", //post the data from API
                    headers: { "content-Type": "application/json" },
                    body: JSON.stringify, "testFood"
                    })
        
          const newlyCreatedItem = await Response.json()
          const lastCreatedItem = newlyCreatedItem

     }

     async function onUpdateFoodClick( ) {
          if(lastCreatedItem === null)
               const resonse = await fetch("http://localhost:3005/beverages/" + lastCreatedItem.id, {
               method: "post", //post the data from API
               headers: { "content-Type": "application/json" },
               body: JSON.stringify, "testFood"
                    })
     }