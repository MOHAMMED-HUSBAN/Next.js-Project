// components/Layout.js (Client Component)
'use client';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{
        backgroundColor: '#0070f3',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      </nav>
      <main style={{ flex: '1', padding: '20px', textAlign: 'center' }}>
        {children}
      </main>
      <footer style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        position: 'relative'
      }}>
        © 2024 Our E-commerce Store
      </footer>
    </div>
  );
}
