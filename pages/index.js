import Head from 'next/head'
import ProductListing from '@components/ProductListing'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="description">
          BOOM!
        </p>
      </main>

      <Footer />
    </div>
  )
}
