import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar' 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Head>
        <title>Elouan Jeanson - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}