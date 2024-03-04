import RestaurantCard from "../components/RestaurantCard";
import { restData } from "../utils/mockdata";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ResCard_API } from "../utils/constant";
import { withPromatedLabel } from "./RestaurantCard";

//not using key{not acceptable}<<<<index as key <<<<<<unique id

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restData.restaurants); //restData.restaurants

  const RestaurantCardPromated = withPromatedLabel(RestaurantCard);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ResCard_API);

    const json = await data.json();

    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantData);
  };

  const filterRestaurant = () => {
    const filterRes = restaurantList.filter(function (resCard) {
      return resCard.info.avgRating > 4;
    });
    setRestaurantList(filterRes);
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="section flex justify-between mx-20 my-2">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurantList(filterRestaurant);
            }}
          >
            {" "}
            search
          </button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={filterRestaurant}>
            Toprated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurantList.map(function (ResCard) {
          return (
            <Link key={ResCard.info.id} to={"/restaurants/" + ResCard.info.id}>
              {/* {if the restaurant is promoted} */}
              {ResCard.info.promoted ? (
                <RestaurantCardPromated data={ResCard} />
              ) : (
                <RestaurantCard data={ResCard} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
