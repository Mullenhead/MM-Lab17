
import CardImage1 from "./assets/ingredient1.png";
import CardImage2 from "./assets/ingredient2.png";
import type { Slide } from "./types";

type ingredientProps = {
  slide: Slide
  isSelected: boolean
  onSelected: (id: number) => void
  deleteSlide: (id: number) => void
}

export default function Ingredient({ 
  slide, 
  isSelected, 
  onSelected, 
  deleteSlide 
}: ingredientProps ) {
  
return (

  <div className=" d-inline-flex m-2 " >
    <div className= { `border border-4 rounded-4 ${isSelected ? "border-warning" : "border-light"}`}>
      <div className=" d-flex border border-secondary rounded-3 flex-column m-1 p-3">
        <div className="d-flex align-items-end flex-column">
     

  {/* Button to delete the card? */}
 
   <button 
    className="btn btn-sm btn-light" 
    onClick={() => deleteSlide(slide.id)}
    >X</button>
    </div> 
     
    {/* <span>see ingredient?</span>
    <img src={CardImage2} alt="nothing here" />  */}

    <img 
    src={slide.image} 
    style={{ width: "96px" }} 
    onClick={() => onSelected(slide.id)}
    />
     <span> Item { slide.order } from { slide.description  }</span>

      </div>
    </div>
  </div>
  
  )
  }
