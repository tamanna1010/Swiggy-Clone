import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [resItems, setResItem] = useState([]);
    useEffect(()=>{fetchData()}, []);
    const fetchData = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResItem(json.data);
    }
    if (resItems.length===0) return <Shimmer/>
    const {text:name} = resItems?.cards[0]?.card?.card;
    const {costForTwoMessage} = resItems?.cards[2]?.card?.card?.info;
    const {itemCards} = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => (
            <li key={item.card.info.id}>
                {item.card.info.name} - { "Rs. "}
                {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default RestaurantMenu;
