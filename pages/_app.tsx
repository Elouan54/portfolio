import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar' 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Head>
        <title>Elouan Jeanson – Développeur / Analyste</title>
        <meta
          name="description"
          content="Portfolio d’Elouan Jeanson, analyste développeur."
        />
        <meta name="keywords" content="Elouan Jeanson, développeur, portfolio, analyste, applications, CV" />
        <meta name="author" content="Elouan Jeanson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (LinkedIn, Facebook, Discord) */}
        <meta property="og:title" content="Elouan Jeanson – Portfolio" />
        <meta
          property="og:description"
          content="Découvrez mes projets, applications et mon CV."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elouanjeanson.fr" />
        <meta property="og:image" content="https://elouanjeanson.fr/logo_portfolio.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elouan Jeanson",
              url: "https://elouanjeanson.fr",
              jobTitle: "Développeur / Analyste",
              sameAs: [
                "https://www.linkedin.com/in/tonprofil",
                "https://github.com/tonprofil"
              ]
            }),
          }}
        />

      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}