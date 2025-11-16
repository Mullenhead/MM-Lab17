import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function MainCardAlert ({ slide }: 
  {slide: {
    id: number,
    order: number, 
    image: string, 
    description: string
    ingredients: string
  }}) {
  const [show, setShow] = useState(false);



  return (
    <>
  <div className=" d-inline-flex  bd-highlight" > 
    <div className=" d-flex border border-secondary rounded-3 flex-column p-2 m-3 shadow ">
      <img src={slide.image} style={{ width: "300px" }} onClick={() => alert ( slide.ingredients)}/>
      <span>{ slide.order }, { slide.description  }</span> 
   </div>
 </div>


      <Alert show={show} variant="primary">
        <Alert.Heading>Ingredients:</Alert.Heading>
         <h3>{ slide.order }, { slide.description  }</h3> 
         <span> { slide.ingredients  }</span> 
      
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Hide Ingredients
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Ingredients</Button>}
    </>
  );
}

// return (
    
//   <div className=" d-inline-flex  bd-highlight" > 
//     <div className=" d-flex border border-secondary rounded-3 flex-column p-2 m-3 shadow ">
//     <img src={slide.image} style={{ width: "300px" }} onClick={() => alert ( slide.ingredients)}/>
//      <span>{ slide.order }, { slide.description  }</span> 
//     </div>
//   </div>

//   )
