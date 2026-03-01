"use client"
import { useScroll, motion } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      {/* Barre de progression */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      />

    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* Background animé discret */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>
      </div>

      <div className="relative z-10">

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center py-32 px-6"
        >
          <h1 className="text-5xl font-bold mb-4">Elouan Jeanson</h1>
          <h2 className="text-2xl text-gray-400 mb-6">Analyste Développeur</h2>
          <p className="max-w-2xl text-gray-300">
            Mon CV et mes futurs projets sur différentes technologies (en construction) sont disponibles sur ce site.
          </p>
        </motion.section>

        {/* APPLICATIONS */}
        <section className="py-20 px-6 bg-gray-900" id="applications">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-semibold mb-10 text-center">Mes Applications</h3>
            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold mb-2">Next.js</h4>
                <p className="text-gray-400 mb-2">Cette page web</p>
                <a
                  href="https://github.com/Elouan54/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-4 py-2 bg-blue-500 text-white rounded mb-2 hover:bg-blue-600 inline-block"
                >
                  Voir le code sur GitHub
                </a>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold mb-2">Symfony + VueJS</h4>
                <p className="text-gray-400">En construction</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold mb-2">Flutter</h4>
                <p className="text-gray-400">En construction</p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 px-6 bg-gray-950 text-white text-center" id="contact">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>

          <p className="mb-4">
            <a
              href="mailto:elouan.jeanson@gmail.com"
              className="text-blue-400 underline hover:text-blue-600"
            >
              elouan.jeanson@gmail.com
            </a>
          </p>

          <p className="mb-4">
            <a
              href="https://www.linkedin.com/in/elouan-jeanson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              LinkedIn
            </a>
          </p>
        </section>
      </div>
    </main>
    </>
  )
}