export default function Home() {
  return (
      <main className="min-h-screen bg-gray-950 text-white">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center py-32 px-6">
          <h1 className="text-5xl font-bold mb-4">Elouan Jeanson</h1>
          <h2 className="text-2xl text-gray-400 mb-6">Analyste Développeur</h2>
          <p className="max-w-2xl text-gray-300">
            Mon CV et mes futurs projets sur différentes technologies (en construction) sont disponibles sur cette page.
          </p>
        </section>

        {/* APPLICATIONS */}
        <section className="py-20 px-6 bg-gray-900" id="applications">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-semibold mb-10 text-center">Mes Applications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
                <h4 className="text-xl font-semibold mb-2">Next.js</h4>
                <p className="text-gray-400 mb-2">Cette page web</p>
                <a
                  href="https://github.com/Elouan54/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-4 py-2 bg-blue-500 text-white rounded mb-2 hover:bg-blue-600"
                >
                  Voir le code sur GitHub
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
                <h4 className="text-xl font-semibold mb-2">Symfony + VueJS</h4>
                <p className="text-gray-400">En construction</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
                <h4 className="text-xl font-semibold mb-2">Flutter</h4>
                <p className="text-gray-400">En construction</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* CONTACT */}
        <section className="py-20 px-6 bg-gray-950 text-white text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <p className="mb-4">
            <a href="mailto:elouan.jeanson@gmail.com" className="text-blue-400 underline hover:text-blue-600">
              elouan.jeanson@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <a href="https://www.linkedin.com/in/elouan-jeanson" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              LinkedIn
            </a>
          </p>
        </section>
      </main>
  )
}