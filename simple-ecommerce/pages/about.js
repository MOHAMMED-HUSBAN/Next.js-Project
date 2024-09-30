import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>About Us - Simple E-Commerce</title>
        <meta name="description" content="Learn more about us!" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <Image src="/path/to/image.jpg" alt="About Us Image" width={500} height={300} />
      <p className="mt-4">We are an e-commerce site dedicated to providing the best products.</p>
    </div>
  );
};

export default About;

