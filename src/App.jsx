import './App.css';
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      {/* 1. Integrated Navbar with dynamic cart count and toggle */}
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      {/* 2. Integrated CartDrawer overlay */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">LIGHT UP YOUR WORLD</span>

            <h1>
              Make your space
              <br />
              <span>feel different.</span>
            </h1>

            <p>
              Discover ambient lighting and modern decor
              designed to make every corner feel like yours.
            </p>

            <a href="#products" className="shop-button">
              Explore collection <span>→</span>
            </a>

            <div className="hero-note">
              <span className="status-dot"></span>
              Your space. Your atmosphere.
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"
              alt="Modern decorative lamp illuminating a room"
            />

            <div className="image-label">
              <span>01 / AMBIENT LIGHTING</span>
              <strong>Find your glow.</strong>
            </div>
          </div>
        </section>

        <section id="categories" className="categories">
          <div>
            <span className="eyebrow">CURATED FOR YOUR SPACE</span>
            <h2>Explore our world</h2>
          </div>

          <div className="category-list">
            <div className="category-item">
              <span>01</span>
              <h3>Ambient Lighting</h3>
              <p>Set the mood.</p>
            </div>

            <div className="category-item">
              <span>02</span>
              <h3>Decorative Lamps</h3>
              <p>Light with character.</p>
            </div>

            <div className="category-item">
              <span>03</span>
              <h3>Room Decor</h3>
              <p>Details that matter.</p>
            </div>
          </div>
        </section>

        <section id="products" className="products-section">
          <div className="products-intro">
            <span className="eyebrow">THE LUMA COLLECTION</span>
            <h2>Something for your space.</h2>
            <p>
              Thoughtful details. Beautiful light.
              A space that feels like you.
            </p>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;