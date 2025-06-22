import { useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo.length === 0) return <Shimmer />;
  const itemCards =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (e) =>
        e.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="items-center flex flex-col">
      <h1 className="items-center flex font-bold">
        {resInfo.cards[2].card.card.info.name}
      </h1>
      <div className="flex justify-between">
        <h3 className=" font-bold mr-2">
          {resInfo.cards[2].card.card.info.cuisines.join(", ")} -{" "}
        </h3>
        <h5 className=" font-bold">
          {" "}
          {resInfo.cards[2].card.card.info.costForTwoMessage}
        </h5>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          index={index}
          showItems={index === showIndex ? true : false}
          setShowIndex={(index) => setShowIndex(prevIndex => (prevIndex === index ? null : index))}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
