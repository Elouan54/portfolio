export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* PRESENTATION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Elouan Jeanson
        </h1>
        <h2 className="text-2xl text-gray-400 mb-6">
          Analyste Développeur
        </h2>
        <p className="max-w-2xl text-gray-300">
          description
        </p>
        <a
          href="https://github.com/Elouan54/portfolio"
          target="_blank"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Voir le code sur GitHub
        </a>
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
          <a href="https://www.linkedin.com/in/elouan-jeanson" target="_blank" className="text-blue-400 underline">
            LinkedIn
          </a>
        </p>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center">
            Mes Applications
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">
                Symfony + VueJS
              </h4>
              <p className="text-gray-400">
                Application web
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">
                Flutter
              </h4>
              <p className="text-gray-400">
                Applications Flutter
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">
                Autres Projets
              </h4>
              <p className="text-gray-400">
                Futur projet...
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}