import { useEffect, useState } from "react";

const UseRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState({});
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch();
  };
  return resInfo;
};
export default UseRestaurantMenu;
