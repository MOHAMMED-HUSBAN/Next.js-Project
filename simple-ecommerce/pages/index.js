import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Home - Simple E-Commerce</title>
        <meta name="description" content="Welcome to our simple e-commerce site!" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Site</h1>
      <nav>
        <Link href="/products" className="mr-4">Products</Link>
        <Link href="/about">About Us</Link>
      </nav>
    </div>
  );
};

export default Home;
