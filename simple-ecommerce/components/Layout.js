
// components/Layout.js (Client Component)
'use client';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>{children}</main>
      <footer>© 2024 Our E-commerce Store</footer>
    </div>
  );
}
