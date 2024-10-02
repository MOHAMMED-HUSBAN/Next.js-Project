
// components/ProductCard.js (Client Component)
'use client';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <Link href={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}