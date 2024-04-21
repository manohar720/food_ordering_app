import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //how will i read items from store. Use Slector
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center m-2 ">
        <h1 className="font-bold text-xl">Cart</h1>
        <div>
          <button
            className="font-bold bg-lime-500 text-zinc-50 rounded-lg p-1 m-2"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1 className="text-red-400">Cart is empty.Add item to the Cart</h1>
          )}
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
