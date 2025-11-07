import "./App.css";
import React, { useState, useEffect } from "react";




export default function AddChips() {
//   const url = "https://jsonplaceholder.typicode.com/users"
     const url = "http://localhost:3005/special"
     const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className=" d-flex border border-secondary rounded-3 flex-column m-1 p-3">
      <h1 style={{ color: "#71bdddff" }}>This is your order</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#e1e1e1ff",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: "#635f7bff" }}>{dataObj.description}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

