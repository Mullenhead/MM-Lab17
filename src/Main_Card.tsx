export default function Main_Card({ slide }: 
  {slide: {
    id: number,
    order: number, 
    image: string, 
    description: string
    ingredients: string
  }}) {

return (
    
  <div className=" d-inline-flex  bd-highlight" >
    <div className=" d-flex border border-secondary rounded-3 flex-column p-2 m-3 shadow ">
      <img src={slide.image} style={{ width: "300px" }} onClick={() => alert ( slide.ingredients)}/>
       <span>{ slide.order }, { slide.description  }</span>
    </div>
  </div>

  )
}

//  {/* Show ingredient with onClick, selecting slide with golden outline  */}
//    <div >
//     <img 
//     src={slide.image} 
//     style={{ width: "96px" }} 
//     onClick={() => onSelected(slide.id)}
//     />
//     </div>
//        <span> Item { slide.order } from { slide.description  }</span>
//       </div>
//     </div>
//   </div>