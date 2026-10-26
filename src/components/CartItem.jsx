import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>{item.price.toLocaleString("en-US")} DA</p>

        <div className="cart-item-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>

      <div className="cart-item-actions">
        <strong>{(item.price * item.quantity).toLocaleString("en-US")} DA</strong>
        <button
          className="remove-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;