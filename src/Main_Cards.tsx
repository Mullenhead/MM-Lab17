import Main_Card from "./Main_Card";
import type { Slide } from './types';
import cardImage1 from "./assets/sub_1.png";
import cardImage2 from "./assets/sub_2.png";
import cardImage3 from "./assets/sub_3.png";
import cardImage4 from "./assets/sub_4.png";
import cardImage5 from "./assets/sub_5.png";
import cardImage6 from "./assets/sub_6.png";



const testCards = [
  {
    id: 0,
    order: 1,
    image: cardImage1,
    description: "Pressed Italian Picnic Sandwich",
    ingredients: "Italian bread, cured meats salami, mortadella, and capicola, provolone cheese, shredded lettuce, sliced tomatoes, onions, and pickled peppers, finished with a drizzle of olive oil and vinegar and seasonings like oregano"
  },
  {
    id: 1,
    order: 2,
    image: cardImage2,
    description: "Gourmet Grilled Cheese Sandwich",
    ingredients: "2 ounces sliced melting cheese (about 2 slices), such as American, Cheddar, muenster, Havarti, Swiss, fontina, Mozzarella, Monterey jack, pepper jack, provolone"
  },
   {
    id: 2,
    order: 3,
    image: cardImage3,
    description: "Epic Ham Sandwich ",
    ingredients: "A basic ham sandwich includes bread, ham, and a spread like mayonnaise or mustard. Common additions to elevate the sandwich include cheese, lettuce, tomato, and onion."
  },
  {
    id: 3,
    order: 4,
    image: cardImage4,
    description: "The Best Egg Salad Sandwich",
    ingredients: "hard-boiled eggs, mayonnaise, and mustard"
  },
  {
    id: 4,
    order: 5,
    image: cardImage5,
    description: "Cuban Sandwich",
    ingredients: "Cuban bread, yellow mustard, Swiss cheese, roasted pork, ham, and dill pickles"
  },
  {
    id: 5,
    order: 6,
    image: cardImage6,
    description: "Green Goddess Crunch Sandwich",
    ingredients: "bread, an avocado spread or slices, fresh greens like spinach or lettuce, and a green goddess dressing or pesto, along with other fresh vegetables such as cucumber, sprouts, and herbs like chives"
  }
 
 
]


export default function Main_Cards() {
  return (
    <div >
       <h1 className="text-muted mt-6 ">Try our Famous Sandwiches</h1>           
          <div>
            {testCards.map( s => <Main_Card key={s.id} slide={ s }/> ) }         
          </div>
    </div>
       
   )
} 