import Head from 'next/head'

export default function CV() {
  return (
    <>
      <Head>
        <title>CV – Elouan Jeanson</title>
        <meta
          name="description"
          content="Consultez le CV d’Elouan Jeanson, développeur et analyste."
        />
        <link rel="canonical" href="https://elouanjeanson.fr/cv/" />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">CV - Elouan Jeanson</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Profil</h2>
          <p>
            Diplômé d’un Mastère Manager en Architecture et Applications Logicielles des SI, je mets en œuvre mes compétences dans le développement de solutions logicielles et poursuis activement l’acquisition de nouvelles compétences.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Formation</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Mastère Manager en Architecture et Applications Logicielles des SI – CESI (2023-2025)</li>
            <li>Bachelor Concepteur Développeur d’Applications – CESI (2022-2023)</li>
            <li>BTS Systèmes Numériques option Informatique et Réseaux – Lycée Henri Loritz (2019-2021)</li>
            <li>Baccalauréat Scientifique option Sciences de l’Ingénieur – Lycée Henri Loritz (2019)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Transports Vigneron – Développeur Informatique (2022-2025)</li>
            <li>Orange Service DESI – Stage Développeur (2020)</li>
            <li>Missions d’intérim (2021-2022)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Symfony, VueJS, Flutter</li>
            <li>MySQL, SQL Server, Oracle Database</li>
            <li>Gestion de projets, management</li>
          </ul>
        </section>
      </main>
      </>
  )
}