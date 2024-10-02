
// pages/products/index.js (SSR)
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../lib/api';

export default function Products({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, []);

  return (
    <Layout>
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { initialProducts: products } };
}
