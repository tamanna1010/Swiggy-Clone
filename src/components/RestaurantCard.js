import {CDN_URL} from "../utils/constants"
const RestaurantCard = (props) => {
    
    const {resData} = props
    const {name, avgRating, cloudinaryImageId, cuisines, costForTwo, sla} = resData?.info;
    const styleCard={
        backgroundColor: "#f0f0f0"
    }
    
    return (
        <>
            <div className="res-card" style={styleCard}>
                
                <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
                <div className="res-content">
                    <h2>{name}</h2>
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