import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    
    
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <>
            <div className="body">
                <div className="filter">
                    <input type="text" value={searchText} onChange={(e) => {setsearchText(e.target.value)}}/>
                    <button onClick={
                        ()=>{
                        
                        const filteredRes = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        
                        setFilteredRestaurant(filteredRes)
                        }}>Search</button>
                    <button className="filter-btn" onClick={
                        ()=>{
                            const filteredList = listOfRestaurants.filter((rest) => rest?.info?.avgRating > 4);
                            
                            setFilteredRestaurant(filteredList)
                        }
                    }>Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurant.map((restaurant) =>(
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                <RestaurantCard  resData={restaurant}/>
                            </Link>
                            
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Body;