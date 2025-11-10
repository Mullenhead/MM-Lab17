
import React, { useState, useEffect } from 'react';

type foodProps = {
  isSelected: boolean
  onSelected: (id: number) => void
  deleteSlide: (id: number) => void
  foodContainer?: null
  onClick?: null
}

//Button for food items(sandwiches, beverages, chips, extra) from internal API menu/beverages

export default function Test_Button({ 
  isSelected, 
  onSelected, 
  deleteSlide 
}: foodProps ) 



return(
       <>
       <button className="btn btn-primary p-1 border" 
           onClick = {handleButtonClick} 
             ></button>

         <button className="btn btn-primary p-1 border" 
           onClick= () => alert("Send me to c")
           ></button>

           <button className="btn btn-primar p-1 bordery" 
           onClick= {onFetchFoodClick} 
           ></button>

            fetch from db.json/menu</button>
         <button className="btn btn-primary " onClick={() => alert("Send me to c")} />
            {/* //how to get .ID to look at API ? */}
         <button className="btn btn-primary " onClick={() => onSelected(beverages.id)} />
             
         <div id="food-container"></div>
         <script src="test.jsx"></script>
       

        </>
)



    
    


// export default function Test_Button() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace with your actual internal API endpoint
//         const response = await fetch('/db.json/menu'); 
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures this runs once on component mount

//   if (loading) {
//     return (
//       <Container className="text-center mt-5">
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="mt-5">
//         <Alert variant="danger">Error: {error.message}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-5">
//       <Card>
//         <Card.Header>Fetched Data</Card.Header>
//         <Card.Body>
//           {data ? (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           ) : (
//             <p>No data found.</p>
//           )}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }
