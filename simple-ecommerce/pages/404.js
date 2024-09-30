import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Page Not Found - Simple E-Commerce</title>
      </Head>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 text-blue-500">Go back to Home</Link>
    </div>
  );
};

export default Custom404;
