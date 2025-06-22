import { useSelector } from "react-redux";
import { CDN } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartitems - " + JSON.stringify(cartItems));
  return (
    <div className=" flex flex-col">
      <h1 className="font-bold text-2xl m-4 p-4 border-amber-50">Cart</h1>

      {/* <div className="flex flex-col top-10 justify-items-center w-2xl bg-gray-100"> */}
      {cartItems.map((lineItem) => (
        <div
          className="flex flex-row relative w-[50%] p-2 m-4 border-b-2 border-gray-200 bg-gray-100"
          key={lineItem.card.info.id}
        >
          <div className="flex flex-col w-[70%]">
            <span className="font-sans m-2 font-semibold">
              {lineItem.card.info.name}
            </span>
            <span className="font-sans m-1 font-semibold">
              ₹
              {(lineItem.card?.info?.price ??
                lineItem.card?.info?.defaultPrice) / 100}
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
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Cart;
