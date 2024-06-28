import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// pages/index.js
import MyButton from '../components/boton';

const Home = () => {
  return (
    <div>
      <MyButton text="Ir flow" url="https://www.flow.cl/btn.php?token=27mhkwc" />
    </div>
  );
};


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bienvenidos a MiViajeAPP!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>
          hola que hace broooo
        </p>
      </main>

      <MyButton />
      <Footer />
    </div>
  )
}
