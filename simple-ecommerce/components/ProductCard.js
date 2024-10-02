// components/ProductCard.js (Client Component)
'use client';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{product.title}</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Price: ${product.price}</p>
      <Link href={`/products/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}
