import sub_1 from "./assets/sub_1.png";
import sub_2 from "./assets/sub_2.png";
import sub_3 from "./assets/sub_3.png";
import sub_4 from "./assets/sub_4.png";

export default function subCard () {
    return (
<div className="card" style={{width: "18rem"}}>
  <img src={sub_1} className="card-img-top" alt="Alt text here"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


    )
}