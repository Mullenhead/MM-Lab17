import type { Slide } from "./types"

type SlideViewProps = {
     slide?: Slide
     updateSlide: (property: string, value: string, id?: number ) => void
}


export default function DonutView({slide, updateSlide}: SlideViewProps) {
 let slideHeight = 300
    return (
       <div>
        
        {/* slide selected shown here */}
        <div className=" flex-grow d-flex border border-secondary rounded-3 flex-column m-1 p-3">
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              
            <div className=" bg-white m-3 w-75 shadow-sm p-3 borde d-flex flex-column">
                 {/* selected slide type changed with top nav font modal */}
                <div
                    style={{ 
                    color: slide?.fontColor,
                    fontFamily: slide?.fontFamily,
                    fontSize: slide?.fontSize + "px"}}>
                    Ingredient origin
                </div>
                    {/* selected slide image shown */}
                <div>
                    <div className="fw-bolder h3">{slide?.description}</div>
                    <img src={slide?.image} />                      
                 </div>
                   {/* selected slide  "use and text" information */}
            </div>  
                <div className=" d-flex flex-column">
                   <div className=" h3">{slide?.use}</div>
                   <div>{slide?.text}</div>
                </div>
            </div>
            {/* Speaker notes for selected slide. */}
        </div> 
            <textarea className="form-control" 
            onChange={(event) => updateSlide("speakerNotes", event.target.value, slide?.id)}
            value={slide?.speakerNotes}
            // defaultValue="Add comments here"
            ></textarea>
            {/* <h4>See this?</h4> */}
        </div>
    )
}