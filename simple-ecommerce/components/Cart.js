
// components/Cart.js (Client Component)
'use client';
import { useState } from 'react';

export default function Cart({ productId }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems([...cartItems, productId]);
    alert(`Product ${productId} added to cart!`);
  };

  return (
    <div>
      <button onClick={addToCart}>Add to Cart</button>
      <p>Items in cart: {cartItems.length}</p>
    </div>
  );
}
