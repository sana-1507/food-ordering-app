import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

// import { useParams } from "react-router-dom";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

//   const { id } = useParams();

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
}

export default useRestaurantMenu;
