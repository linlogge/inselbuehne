import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Willkommen - Inselbühne Potsdam</title>
      </Head>
      <Header />
      <Footer />
    </>
  )
}
