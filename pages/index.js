import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// pages/index.js
import MyButton from '../components/boton';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bienvenidos a MiViajeAPP!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenidos a MiViajeAPP!" />
        <p className="description">
          Puedes pagar tu saldo acá <MyButton text="Ir flow" url="https://www.flow.cl/btn.php?token=27mhkwc" />
        </p>
        <p>
          hola que hace broooo
        </p>
      </main>

      <Footer />
    </div>
  )
}
