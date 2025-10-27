import type { Slide } from "./types"

type SlideViewProps = {
    slide?: Slide
    updateSlide: (property: string, value: string, id?: number ) => void
}


export default function ViewIngredients({slide, updateSlide}: SlideViewProps) {
 let slideHeight = 300
    return (
       <div>
        <div className=" flex-grow d-flex border border-secondary rounded-3 flex-column m-1 p-3">
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <div className="bg-white m-3 w-75 shadow-sm p-3 border" 
                style={{ height: slideHeight + "px",
                    color: slide?.fontColor
                }}>
                    Slide View</div>
                <div className=" d-flex flex-column">
                <div className="h3">{slide?.description}</div>
                <div>{slide?.text}</div>
                </div>
            </div>
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