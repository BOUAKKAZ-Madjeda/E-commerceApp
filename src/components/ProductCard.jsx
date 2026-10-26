import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>{product.price.toLocaleString("en-US")} DA</strong>
          <button
            className="add-button"
            onClick={handleAdd}
            style={{
              backgroundColor: added ? "#10b981" : undefined,
              transition: "background-color 0.2s"
            }}
          >
            {added ? "Added ✓" : "Add +"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;