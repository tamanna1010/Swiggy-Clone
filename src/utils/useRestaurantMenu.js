import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resItems, setResItem] = useState([]);
    useEffect(()=>{fetchData()}, []);
    const fetchData = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResItem(json.data);
    }
  return resItems
}

export default useRestaurantMenu;
