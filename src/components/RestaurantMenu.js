
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";


const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    const resItems = useRestaurantMenu(resId);
    
   
    if (resItems.length===0) return <Shimmer/>
    const {name} = resItems?.cards[2]?.card?.card?.info;
    const {costForTwoMessage} = resItems?.cards[2]?.card?.card?.info;
    
    const menucategory = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const categories = menucategory.filter( (cl) => cl?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   
    
  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <h2 className="font-bold text-lg">{costForTwoMessage}</h2>
      {categories.map((category, index) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex && true} setShowIndex={() => setShowIndex(index)}/>)}
    </div>
  )
}

export default RestaurantMenu;
