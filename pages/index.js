import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import transaccion from '@components/transaccion'
import datos from '@components/datos'

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
        <p>
          hola que hace bro yo casi muriendo
        </p>
      </main>

      <transaccion />
      <datos />
      <Footer />
    </div>
  )
}
