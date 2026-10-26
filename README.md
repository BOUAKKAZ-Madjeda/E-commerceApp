# DZTech Store 🛒

A modern, responsive e-commerce web application built using **React.js** and **Redux Toolkit** for managing ambient lighting and home decor products.

---

## 👤 Student Information
* **Name:** BOUAKKAZ Madjeda
* **Course:** WAMD (Web Application Development) - ENSTA
* **Academic Year:** 2026

---

## 📌 Project Overview
**DZTech Store** (LUMASPACE) provides an intuitive online shopping experience where users can browse ambient lighting products, filter by categories or search terms, and manage their shopping cart dynamically in real time using a Redux global store.

---

## 🛠️ Technologies Used
* **React.js** (Vite setup) — Component-based UI rendering
* **Redux Toolkit & React-Redux** — Centralized global state management
* **JavaScript (ES6+)** — Application logic
* **CSS3** — Custom modern dark-theme layout & responsive UI
* **Git & GitHub** — Version control

---

## 🏗️ Main React Components
* **`App.jsx`**: The root component managing layout, search/category state, and rendering overall structure.
* **`Navbar.jsx`**: Top navigation displaying brand logo, navigation links, and dynamic cart item count.
* **`ProductCard.jsx`**: Renders individual product cards with images, details, pricing in Algerian Dinars (DA), and an "Add +" action button.
* **`CartDrawer.jsx`**: A sliding side panel showing selected products, quantity controls, grand total calculation, and checkout actions.
* **`CartItem.jsx`**: Handles item-level cart actions like increasing, decreasing, or removing items.

---

## 🔄 Redux State Management
Global state is managed via **Redux Toolkit** (`store.js` and `cartSlice.js`):
* **Cart Items**: Array of products added to the cart, including their quantities.
* **Cart Total**: Dynamic calculation of the total price in DA based on items and quantities.
* **Cart Count**: Total number of items displayed in the `Navbar`.
* **Dispatched Actions**:
  * `addToCart`: Adds a product or increments quantity if already present.
  * `removeFromCart`: Removes a product from the cart completely.
  * `increaseQuantity`: Increases item quantity by 1.
  * `decreaseQuantity`: Decreases item quantity or removes item if quantity reaches 0.
  * `clearCart`: Resets the cart to empty.

---

## 🌟 Key Features
* 📦 **Product Catalog**: Browsable products complete with images, categories, and prices.
* 🔎 **Search & Filter**: Search products by name and filter by category dynamically.
* 🛒 **Dynamic Shopping Cart**: Real-time reactive updates across components without full page reloads.
* 💰 **Currency Formatting**: Prices formatted in Algerian Dinars (`DA`).
* 📱 **Responsive Design**: Works on desktop, tablet, and mobile screens.

---

## 🚀 How to Run the Application

### 1. Clone the repository
```bash
git clone [https://github.com/BOUAKKAZ-Madjeda/E-commerceApp.git](https://github.com/BOUAKKAZ-Madjeda/E-commerceApp.git)
cd dztech-store
