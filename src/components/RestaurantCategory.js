import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, index, setShowIndex }) => {
  const handleClick = () => {
    console.log("Clicked");
    setShowIndex(index);
  };
  return (
    <div>
      {/* Header */}
      <div
        className="block w-full bg-gray-100 shadow-lg p-4 min-w-3xl mt-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="float-right">🔻</span>
      </div>

      {showItems && <ItemList data={data.itemCards}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
