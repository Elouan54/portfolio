import Head from "next/head"

export default function CV() {
  return (
    <div className="bg-gray-950 text-white min-h-screen scroll-smooth">

      <Head>
        <title>CV – Elouan Jeanson</title>
      </Head>

      {/* MENU STICKY */}
      <nav className="sticky top-0 z-50 bg-gray-900/0 backdrop-blur border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm">
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          <a href="#profil" className="hover:text-blue-400 transition">Profil</a>
          <a href="#competences" className="hover:text-blue-400 transition">Compétences</a>
          <a href="#experiences" className="hover:text-blue-400 transition">Expériences</a>
          <a href="#formation" className="hover:text-blue-400 transition">Formation</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* CONTACT */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact</h2>
          <div className="space-y-2 text-gray-300">
            <p>ELOUAN JEANSON</p>
            <p>Nancy, France</p>
            <p>24 ans</p>
            <p>Permis B + voiture personnelle</p>
            <p>Email : <a href="mailto:elouan.jeanson@gmail.com" className="text-blue-400 underline hover:text-blue-600">
            elouan.jeanson@gmail.com</a></p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/elouan-jeanson" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            linkedin.com/in/elouan-jeanson</a></p>
          </div>
        </section>

        {/* PROFIL */}
        <section id="profil">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Profil</h2>
          <p className="text-gray-300 leading-relaxed">
            Diplômé d’un Mastère Manager en Architecture et Applications
            Logicielles des SI, je mets en oeuvre mes compétences dans le
            développement de solutions logicielles et poursuis activement
            l’acquisition de nouvelles compétences.
          </p>
        </section>

        {/* COMPÉTENCES */}
        <section id="competences">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Compétences</h2>
          <h3 className="text-xl mb-2">Framework Backend</h3>
          <div className="flex flex-wrap gap-3 mb-1">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">Symfony</span>
          </div>
          <h3 className="text-xl mb-2">Framework Frontend</h3>
          <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">VueJS</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">Next.js</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">TailwindCSS</span>
          </div>
          <h3 className="text-xl mb-2">Framework Mobile</h3>
          <div className="flex flex-wrap gap-3 mb-2">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">Flutter</span>
          </div>
          <h3 className="text-xl mb-2">Bases de données</h3>
          <div className="flex flex-wrap gap-3 mb-2">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">MySQL</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">SQL Server</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">Oracle Database</span>
          </div>
          <h3 className="text-xl mb-2">Formations</h3>
          <div className="flex flex-wrap gap-3 mb-2">
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">Gestion de projets</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">Management</span>
          </div>
        </section>

        {/* EXPÉRIENCES */}
        <section id="experiences">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Expériences</h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">Développeur informatique</h3>
              <p className="text-gray-400">TRANSPORTS VIGNERON, Ludres, septembre 2022 – septembre 2025</p>
              <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside">
                <li>Conception, développement et documentation d’une application web
                  interne dédiée à l’automatisation et à la dématérialisation du
                  traitement des factures.
                </li>
                <li>Développement frontend : HTML, CSS, JavaScript, Ajax, jQuery
                  (interfaces dynamiques et ergonomiques).
                </li>
                <li>Développement backend : PHP, MySQL (gestion des données et
                  logique métier de facturation).
                </li>
                <li>Collaboration avec les équipes comptabilité, facturation et exploitation
                  afin d’intégrer les contraintes métiers et comptables.
                </li>
                <li>Analyse comparative de différentes Plateformes de Dématérialisation
                  Partenaire (PDP) dans le cadre de la réforme de la facture
                  électronique.
                </li>
                <li>Support et hotline informatique interne : assistance aux utilisateurs,
                  résolution d’incidents techniques et accompagnement à la prise en
                  main de l’outil.
                </li>
                <li>Contribution à l’amélioration des processus internes
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">Missions d&apos;intérim</h3>
              <p className="text-gray-400">Nancy et alentours, décembre 2021 – mars 2022</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">Stage développeur informatique</h3>
              <p className="text-gray-400">ORANGE SERVICE DESI, Vandoeuvre-lès-Nancy, juin 2020 – juillet 2020</p>
              <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside">
                <li>Conception d’une application web de monitoring : amélioration de
                  la supervision des données via un framework PHP interne
                </li>
                <li>
                  Remplacement d’une application de monitoring : fiabilisation des
                  processus de validation et modernisation du système
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FORMATION */}
        <section id="formation">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Formation</h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">MASTÈRE MANAGER EN ARCHITECTURE ET
                APPLICATIONS LOGICIELLES DES SI
              </h3>
              <p className="text-gray-400">CESI alternance, Vandoeuvre-lès-Nancy, septembre 2023 - septembre 2025</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">BACHELOR CONCEPTEUR DÉVELOPPEUR
                D’APPLICATIONS
              </h3>
              <p className="text-gray-400">CESI alternance, Vandoeuvre-lès-Nancy, septembre 2022 - septembre 2023</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">BREVET DE TECHNICIEN SUPÉRIEUR
                SYSTÈMES NUMÉRIQUES OPTION
                INFORMATIQUE ET RÉSEAUX
              </h3>
              <p className="text-gray-400">Lycée Henri Loritz, Nancy, septembre 2019 - septembre 2021</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold">BACCALAURÉAT SCIENTIFIQUE OPTION
                SCIENCES DE L’INGÉNIEUR
              </h3>
              <p className="text-gray-400">Lycée Henri Loritz, Nancy, 2019</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}