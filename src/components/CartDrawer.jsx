import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../features/cart/cartSlice";
import CartItem from "./CartItem";

function CartDrawer({ open, onClose }) {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      {open && <div className="cart-overlay" onClick={onClose} />}
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>{total.toLocaleString("en-US")} DA</strong>
            </div>
            <button
              className="checkout-button"
              onClick={() => {
                dispatch(clearCart());
                onClose();
              }}
            >
              Checkout
            </button>
            <button className="clear-button" onClick={() => dispatch(clearCart())}>
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;