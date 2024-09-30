import Link from 'next/link';
import Head from 'next/head';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Products - Simple E-Commerce</title>
        <meta name="description" content="Browse our products!" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <Link href={`/products/${product.id}`}>
              <span className="font-semibold">{product.name}</span> - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
