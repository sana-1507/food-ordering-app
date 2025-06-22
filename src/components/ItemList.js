import { CDN } from "../utils/constants";
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux";
const ItemList = (items) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="flex flex-col w-3xl bg-gray-100">
      {items.data.map((lineItem) => (
        <div
          className="flex flex-row p-2 m-2 border-b-2 border-gray-200"
          key={lineItem.card.info.id}
        >
          <div className="flex flex-col w-[70%]">
            <span className="font-sans m-2 font-semibold">
              {lineItem.card.info.name}
            </span>
            <span className="font-sans m-1 font-semibold">
              ₹
              {(lineItem.card?.info?.price ?? lineItem.card?.info?.defaultPrice) / 100}
            </span>
            <p className="mt-2 ml-1.5 text-xs">
              {" "}
              {lineItem.card.info.description}
            </p>
          </div>

          <div className="flex flex-row justify-end w-[30%] relative">
            <img
              className="float-right w-22 h-25"
              src={CDN + lineItem.card.info.imageId}
            />
            <button className="bg-gray-100 absolute mt-23 mr-5 shadow-lg  text-xs p-1 font-medium" onClick={() => handleAddItem(lineItem)}>
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
