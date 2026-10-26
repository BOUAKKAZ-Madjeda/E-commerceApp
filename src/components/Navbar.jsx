import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSlice";

function Navbar({ onCartClick }) {
  const count = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <a href="#" className="logo">
        LUMA<span>SPACE</span>
      </a>

      <nav>
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#products">Shop</a>
      </nav>

      <button className="cart-button" onClick={onCartClick}>
        Cart ({count})
      </button>
    </header>
  );
}

export default Navbar;