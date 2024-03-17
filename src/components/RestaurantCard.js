import {CDN_URL} from "../utils/constants"
const RestaurantCard = (props) => {
    
    const {resData} = props
    const {name, avgRating, cloudinaryImageId, cuisines, costForTwo, sla} = resData?.info;
    const styleCard={
        backgroundColor: "#f0f0f0"
    }
    
    return (
        <>
            <div className="m-4 p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-200">
                
                <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
                <div className="res-content">
                    <h2 className="font-bold py-2 text-lg">{name}</h2>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.slaString}</h4>
                </div>
                
            </div>
        </>
    )
}
export default RestaurantCard;