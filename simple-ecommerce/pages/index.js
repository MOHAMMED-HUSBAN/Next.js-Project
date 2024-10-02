// pages/index.js (Server Component)
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to our E-commerce Store</h1>
      <p>Check out our amazing products!</p>
      <Link href="/products">View Products</Link>
    </Layout>
  );
}