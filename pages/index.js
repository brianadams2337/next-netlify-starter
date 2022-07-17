import Head from 'next/head'
import ProductListing from '@components/ProductListing'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getProductList } from '@api/getProductList'

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Next.js Starter!</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main>
//         <Header title="Welcome to my app!" />
//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>
//         <p className="description">
//           BOOM!
//         </p>
//       </main>
//
//       <Footer />
//     </div>
//   )
// }

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Cheese and Meat Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
