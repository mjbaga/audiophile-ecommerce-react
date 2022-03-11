import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from 'store/cart-slice';
import { currencyFormat } from 'utils/CustomFunctions';
import CartItem from 'components/cart/CartItem';
import Button from 'components/common/Button';
import { Fragment } from 'react';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const removeAllHandler = () => {
    dispatch(clearCart());
  }

  return (
    <div className="container mx-auto px-5 lg:px-0 relative">
      <div className="cart p-8 absolute bg-white rounded-lg w-[95%] top-32 left-1/2 -translate-x-2/4 md:translate-x-0 md:w-auto md:min-w-[24rem] lg:top-5 md:left-auto md:right-0  z-[999]">
        <div className="flex justify-between">
          <p className="uppercase text-black font-bold text-md">Cart {cart.totalQuantity > 0 ? `(${cart.totalQuantity})` : ''}</p>
          {cart.totalQuantity > 0 && <button className="border-0 text-black/50 underline" onClick={removeAllHandler}>Remove all</button>}
        </div>
        {cart.totalQuantity <= 0 && <p className="italic mt-8">There are no items added in cart.</p> }
        <ul className="mt-8">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </ul>
        {cart.totalQuantity > 0 && (
          <Fragment>
            <div className="flex justify-between">
              <p className="text-black/50 uppercase">Total</p>
              <p className="font-bold">{currencyFormat(cart.totalCartPrice)}</p>
            </div>
            <Button to="/checkout" classes="mt-4 w-full block text-center text-white text-xs tracking-ap-1 bg-primary hover:bg-secondary font-bold">
              Checkout
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Cart;