import { CDN_URL } from "../utils/constant";
export const ItemList = (item) => {
  return (
    <div>
      {item.data?.itemCards.map((itemCards) => {
        return (
          <div key={itemCards.card.info.id}>
            <div className="p-2 text-l font-medium ">
              <span className="m-2">{itemCards.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {itemCards.card.info.price
                  ? itemCards.card.info.price / 100
                  : itemCards.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="flex p-2 m-2 justify-between">
              <div className="m-4 w-8/12">
                {itemCards.card.info.description}
              </div>

              <div className="image w-3/12 m-2 ">
                <div className="button absolute bg-black text-white rounded-lg">
                  <button>Add +</button>
                </div>
                <img
                  src={CDN_URL + itemCards.card.info.imageId}
                  className="w-full rounded-lg"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
