import { useSelector } from "react-redux";

const Cart = () => {
  //how will i read items from store. Use Slector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="text-center m-2 ">
        <h1 className="font-bold text-xl">Cart</h1>
        <div>
          {cartItems.map((items) => {
            return (
              <div className="m-1 text-lime-600">{items.card.info.name}</div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cart;
