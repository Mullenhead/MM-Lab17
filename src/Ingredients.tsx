import { useState } from 'react';
import Ingredient from "./Ingredient";
import type { Slide } from './types';



type SidebarProps = {
  slides: Array<Slide>
  selectedSlideId: number
  setSelectedSlideId: (newValue: number) => void 
  deleteSlide: (id: number) => void
}

export default function Ingredients({ 
  slides, 
  selectedSlideId, 
  setSelectedSlideId, 
  deleteSlide
 }: SidebarProps) {
  // setting up state for showing/hiding "Ingredients"
  const[isExpanded, setIsExpanded] = useState(true)
 
  const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
  }

  const handleSlideClick = (id: number) => {
       setSelectedSlideId(id)
  }

    return (
      // turnery operator to show "true" or hide "null"
      <div>
 {isExpanded ? (
  <div>
     <div>
       <h5 className="text-muted p-3">Fresh, natural, but not organic ingredients</h5>
      </div>
       {/* <ViewIngredients/>  */}
       <div >
        {slides.map( s => (
          <Ingredient 
            key={s.id} 
            slide={ s }  
            onSelected={handleSlideClick}  
            isSelected={s.id === selectedSlideId} 
            deleteSlide={deleteSlide}
         /> 
        )) }
       </div>
  </div>
         ) : null}
          <button className="btn btn-primary p-1 border" 
           onClick = {handleButtonClick} 
             >
            { isExpanded ? "Close" : "Let's add some ingredients" }</button>
          </div>
      
      )
    } 