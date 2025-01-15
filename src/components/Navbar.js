// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">E-Shop</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart">Cart</Link>
          <span className="cart-count">{cartCount}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
