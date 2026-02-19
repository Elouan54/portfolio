export default function CV() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Mon CV</h1>

        {/* Formation */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Formation</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Mastère Manager en Architecture et Applications Logicielles des SI – CESI (2023-2025)</li>
            <li>Bachelor Concepteur Développeur d’Applications – CESI (2022-2023)</li>
            <li>BTS Systèmes Numériques option Informatique et Réseaux – Lycée Henri Loritz (2019-2021)</li>
            <li>Baccalauréat Scientifique option Sciences de l’Ingénieur – Lycée Henri Loritz (2019)</li>
          </ul>
        </section>

        {/* Expériences */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Expériences</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Transport Vigneron – Développeur Informatique (2022-2025) : développement web interne, automatisation des factures, support utilisateurs.</li>
            <li>Orange Service DESI – Stage Développeur (2020) : amélioration et remplacement d’application de monitoring.</li>
            <li>Missions d’intérim – Nancy et alentours (2021-2022)</li>
          </ul>
        </section>

        {/* Compétences */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
          <p className="text-gray-300">
            <strong>Frameworks :</strong> Symfony, VueJS, Flutter<br/>
            <strong>Bases de données :</strong> MySQL, SQL Server, Oracle<br/>
            <strong>Autres :</strong> Gestion de projets, management, HTML, CSS, JavaScript, Tailwind CSS
          </p>
        </section>
      </div>
    </main>
  )
}