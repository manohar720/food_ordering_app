import ItemList from "./ItemList";

export const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); //toggle
  };

  return (
    <div className="regular-menu">
      {/*accordian header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItems && <ItemList data={data} />}</div>
      </div>

      {/*accordian body*/}
    </div>
  );
};
