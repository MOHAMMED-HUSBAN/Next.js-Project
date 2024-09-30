import { useRouter } from 'next/router';
import Head from 'next/head';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const productDetails = {
    1: { name: 'Product 1', price: '$10', description: 'This is Product 1.' },
    2: { name: 'Product 2', price: '$20', description: 'This is Product 2.' },
    3: { name: 'Product 3', price: '$30', description: 'This is Product 3.' },
  };

  const product = productDetails[id];

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{product.name} - Simple E-Commerce</title>
        <meta name="description" content={product.description} />
      </Head>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-semibold">{product.price}</p>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
