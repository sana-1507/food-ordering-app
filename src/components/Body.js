import RestaurantCard, { promotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOFRest, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3964259&lng=77.3170066&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const PromotedRestaurantCard = promotedLabel(RestaurantCard);

  return listOFRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="flex">
        <div className="flex">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);

              console.log(searchInput);
            }}
          ></input>
          <button
            className="search-btn rounded-md cursor-pointer"
            onClick={() => {
              const searchOutput = listOFRest.filter((res) =>
                res.info.name.includes(searchInput)
              );
              setFilteredRestaurants(searchOutput);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-1">
          <button
            className="m-2 cursor-pointer bg-amber-200 rounded-sm p-1"
            onClick={() => {
              const filteredList = filteredRest.filter(
                (res) => res.info.avgRating >= 4.2
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRest.map((res) => (
          <Link
            to={"/restaurant/" + res.info.id}
            key={res.info.id}
            className="res-link ml-10"
          >
            {/* We can add a condition , if restaruant is promoted, then show PromotedRestaurantCard ,else RestaurantCard  */}
            {/* <RestaurantCard key={res.info.id} resData={res.info} /> */}
            <PromotedRestaurantCard key={res.info.id} resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
