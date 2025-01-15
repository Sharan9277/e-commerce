// src/pages/ProductList.js
import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';


const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
