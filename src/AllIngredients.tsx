import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import Ingredients from "./Ingredients.tsx"
import AddIngredient from "./AddIngredient.tsx"


import ViewIngredients from "./ViewIngredients"
// import UseEffectBasic from "./UseEffectBasic.tsx"
import type { Slide } from "./types"
import { useEffect, useState } from 'react';

// import ViewIngredients from "./ViewIngredients";
import CardImage1 from "./assets/ingredient1.png";
import CardImage2 from "./assets/ingredient2.png";
import CardImage3 from "./assets/ingredient3.png";
import CardImage4 from "./assets/ingredient4.png";
import CardImage5 from "./assets/ingredient5.png";
import CardImage6 from "./assets/ingredient6.png";
import CardImage7 from "./assets/ingredient7.png"
import TopNav from './TopNav.tsx';



const TEST_CARDS = [
  {
    id: 0,
    order: 1,
    image: CardImage1,
    description: "From Italy",
    fontColor: "gold",
    text: "Crafted with care in Italy, our Ground Rosemary embodies the essence of Italian culinary tradition",
    speakerNotes: "Default Notes",
    fontFamily: "Verdana",
    fontSize: "14",
    use: "Used in pasta dishes"
   
  },
  {
    id: 1,
    order: 2,
    image: CardImage2,
    description: "From Germany",
    fontColor: "green",
    text: "basil is a great herb to add. Its aromatic flavor and slightly peppery notes mean it can transform a dish when used with restraint",
    speakerNotes: "Default Notes",
    fontFamily: "Verdana",
    fontSize: "14",
    use: "Used in deserts"
  },
   {
    id: 2,
    order: 3,
    image: CardImage3,
    description: "From Poland",
    fontColor: "gray",
    text: "Those who love cilantro can't get enough of its citrusy flavor and freshness, but there is a large section of people who detest it, claiming it resembles soap",
    speakerNotes: "Default Notes",
    fontFamily: "Verdana",
    fontSize: "14",
    use: "Used in stews and soups"
  },
  {
    id: 3,
    order: 4,
    image: CardImage4,
    description: "From Spain",
    fontColor: "blue",
    text: "This vibrant soft herb has so much potential in terms of flavor and nutrition",
    speakerNotes: "Default Notes",
    fontFamily: "Verdana",
    fontSize: "14",
    use: "Used in salads"
  },
  {
    id: 4,
    order: 5,
    image: CardImage5,
    description: "From USA",
    fontColor: "black",
    text: "Mint has always been synonymous with freshness, and it can add a bright floral note to any dish it graces",
    speakerNotes: "Default Notes",
    fontFamily: "Verdana",
    fontSize: "14",
    use: "Used in meat dishes"
  },
  {
    id: 5,
    order: 6,
    image: CardImage6,
    description: "From Spain",
    fontColor: "red",
    text: "When you need to elevate the flavor of your dish to an elegant new level, tarragon should be your go-to herb. Its unique flavor, with more than a hint of licorice, adds a distinctive edge to meat and fish dishes, particularly in French cuisine.",
    speakerNotes: "Default Notes",
    fontFamily: "Verdana",
    fontSize: "14",
    use: "Used in fish dishes"
  }
]




export default function AllIngredients() {
//slides drawing fro TEST_CARDS for content
const[slides, setSlides] = useState<Slide[]>(TEST_CARDS)
const[selectedSlideId, setSelectedSlideId] = useState(2)
const selectedSlide = slides.find(s => s.id === selectedSlideId)

//use effect hook to change browser heading, dependancy array[] is reading slides.length.
useEffect(() => {
document.title = `There are (${slides.length} slides)`
}, [slides.length])

//create "blank slide" function to pass down to top nav
const addBlankSlide = () => {
  const blankSlide = {
    id: slides.length ? slides[slides.length - 1].id + 1 : 0,
    order: 7,
    image: CardImage7,
    description: "From Armenia",
    fontColor: "gray",
    text: "Cabbage pairs well with all kinds of protein, from salmon to pork to chicken. It partners nicely with pasta—and it makes a most excellent soup.",
    use: "Used in soups"
   
    
  }
  //add blank slide to end of slides using "..."  spread operator
  setSlides([...slides, blankSlide])
}

//function using filter array method to isolate the slide we want to delete
const deleteSlide = (idToDelete: number) => {
setSlides( slides.filter( s => s.id !== idToDelete ) )
}


const updateSlide = (property: string, newValue: string, idToUpdate?: number) => {
  //if statement, no new state if id is unchanged
  if(idToUpdate === undefined) {
    return
  }

//function to update color on slide
setSlides(currentSlides => currentSlides.map(slide => (
  slide.id !== idToUpdate ? slide : {
    ...slide,
    [property]: newValue
  }
)))
}


return (
<>


          



    <div className=" d-flex bg-light  rounded flex-column p-3">
{/* adding prop "blank slide" */}
      <TopNav 
      selectedSlide={selectedSlide} 
      addBlankSlide={addBlankSlide} 
      updateSlide={updateSlide}/> 
    </div>

    <div className=" d-flex border border-secondary rounded flex-column m-1 p-3">
      <Ingredients 
      slides={slides} 
      deleteSlide={deleteSlide} 
      selectedSlideId={selectedSlideId} 
      setSelectedSlideId={setSelectedSlideId}/>
      
      <ViewIngredients 
      slide={selectedSlide}
      updateSlide={updateSlide}
      />
    </div>

  {/* Add functions to App page */}
    <div className=" d-flex border border-secondary rounded flex-column m-1 p-3">
      <AddIngredient/>
    </div>
    </>
  )
}


