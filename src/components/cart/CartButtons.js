import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "store/cart-slice";

const CartButtons = ({ itemId }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((item) => item.id === itemId));
  const btnClasses = "text-black/50 font-bold bg-transparent px-4 py-2 hover:text-primary duration-1000 transition";

  const decreaseHandler = () => {
    dispatch(cartActions.removeItemFromCart(itemId));
  }

  const increaseHandler = () => {
    dispatch(cartActions.increaseCartItemQty(itemId));
  }

  return (
    <div className="bg-darkgray flex gap-2 px-4 items-center">
      <button className={btnClasses} onClick={decreaseHandler}>-</button>
      <span className="px-4 font-bold">{cartItem ? cartItem.quantity : 0}</span>
      <button className={btnClasses} onClick={increaseHandler}>+</button>
    </div>
  )
}

export default CartButtons;