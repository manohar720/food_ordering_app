import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, locality } =
    props.data.info; //destructure
  return (
    <div className="res-card rounded-lg ">
      <div className="top-section">
        <img
          className="res-logo rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>🏍{locality}</h3>
      </div>
      <div className="bottom-section flex  justify-between ">
        <div className="bg-lime-600 text-white px-1 rounded-sm">
          ⁕ {avgRating}
        </div>
        <div className="text-blue-700">{costForTwo}</div>
      </div>
    </div>
  );
};
//HIgher order component
//input(take normal components) ----Output(enhanced components)

export const withPromatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
