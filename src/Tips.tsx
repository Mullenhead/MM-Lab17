
export default function Tips () {

//radio options for tipping. I want to have a statement given based on the selection
return (
     <div >
      {/* <label>
        Text input: <input name="myInput" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" />
      </label>
      <hr /> */}
      <div className="d-flex  flex-column " >
        <h3>Please tip your online waitress, we don't pay them much:</h3>
       
        <label className=" d-flex border border-secondary rounded-3  m-1 p-3">
          <input type="radio" name="myRadio" value="option1" className="me-2" />
        Service was bad, food bland, no tip warrented.
        </label>
         <label className=" d-flex border border-secondary rounded-3  m-1 p-3">
          <input type="radio" name="myRadio" value="option1" className="me-2" />
        I would like to tip 10%.
        </label>
        <label className=" d-flex border border-secondary rounded-3  m-1 p-3">
          <input type="radio" name="myRadio" value="option2" className="me-2" />
           I would like to tip 25%.
        </label>
        <label className=" d-flex border border-secondary rounded-3  m-1 p-3">
          <input type="radio" name="myRadio" value="option3" className="me-2" />
           I would like to tip all my pocket change.
        </label>
      </div>
   </div>
)
}



   

