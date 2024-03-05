import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setRestInfo(json.data);
  };

  if (restInfo === null) {
    return <Shimmer />;
  }

  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="Menu text-center">
      <h1 className="restaurant-name font-bold text-xl">
        {restInfo?.cards[0]?.card.card.info.name}
      </h1>
      <h2>MENU</h2>
      <div className="category">
        {categories.map((c, index) => (
          <RestaurantCategory
            data={c.card.card}
            key={index}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
