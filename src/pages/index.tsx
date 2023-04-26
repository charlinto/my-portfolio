import Head from 'next/head';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import About from '../../components/About';
import Work from '../../components/Work';
import Contact from '../../components/Contact';



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Desmond Fon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682121059/letter-d_at1zou.png" />
      </Head>
      <Nav />
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  )
}
