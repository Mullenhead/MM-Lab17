export default function Description({ slide }: {
    slide: {
        order: number, 
        image: string, 
        description: string
    }}) {

return (
  <div className=" d-inline-flex  bd-highlight" >
    <>
    <div className=" d-flex border border-secondary rounded flex-column m-1 p-3">
    <img src={slide.image} style={{ width: "96px" }} onClick={() => alert("Selected")}/>
     <span>{ slide.order }</span>
     <span >{ slide.description  } </span>
    </div>
    </>
  </div>

  )
}