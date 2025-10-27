import Description from "./components/Description";
import sub_1 from "./assets/sub_1.png";
import sub_2 from "./assets/sub_2.png";
import sub_3 from "./assets/sub_3.png";
import sub_4 from "./assets/sub_4.png";

// making an API of data to use for subs

const subsList = [
    {
        id: 0,
        order: 1,
        description: "this is a description for id 0, sub_1",
        image: sub_1
    },
    {
        id: 1,
        order: 2,
        description: "this is a description for id 1, sub_2",
        image: sub_2
    },
    {
        id: 2,
        order: 3,
        description: "this is a description for id 2, sub_3",
        image: sub_3
    },
    {
        id: 3,
        order: 4,
        description: "this is a description for id 3, sub_4",
        image: sub_4
    }
]

// make  Subs function using Bootstrap card and subs api data from above

export default function Subs() {
    return (
        <div>
            {subsList.map( s => <Description key={s.id} slide={s}/> )}
        </div>




    )   
}