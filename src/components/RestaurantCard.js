import { CDN } from "../utils/constants";

const RestaurantCard = (props) => {
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId
        
    } = props.resData
    return (<div className="res-card">
       
          <img className="res-img" style={{padding:"10px", boxShadow:"10px 10px 20px rgba(0,0,0,0.3)"}} src={CDN + cloudinaryImageId} alt="food image" />
          <h3 className="text-center mt-2">{name}</h3>
          <h5 className="text-center mt-2 text-yellow-700">{cuisines.join(", ")}</h5>
          <div className="flex justify-between mt-3">
          <h5 style={{textAlign:"center",marginTop: "-10px"}}>⭐{avgRating}</h5>
          <h5 style={{textAlign:"center",marginTop: "-10px", color: "salmon"}}>{costForTwo}</h5>
          <h5 style={{textAlign:"center",marginTop: "-10px", color: "olivedrab"}}>⌛{sla.deliveryTime} sec</h5>
          </div>
        </div>
      
   )
}

export const promotedLabel = (RestaurantCard) => {
return(props) => {

    return (
        <div>
            <label className="bg-black text-white shadow-md p-1 text-xs rounded-lg absolute mt-2">Promoted</label>
            <RestaurantCard {...props} />
        </div>
    )
}


}

export default RestaurantCard;