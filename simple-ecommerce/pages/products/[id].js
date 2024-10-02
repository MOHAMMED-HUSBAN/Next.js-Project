import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { fetchProducts, fetchProductById } from '../../lib/api';
import Cart from '../../components/Cart';

export default function ProductDetails({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Cart productId={product.id} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.slice(0, 5).map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.id);
  return { 
    props: { product },
    revalidate: 60, // Revalidate every 60 seconds
  };
}