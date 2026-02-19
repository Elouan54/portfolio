export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nom */}
        <div className="text-2xl font-bold">
          Elouan Jeanson
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400">Accueil</a>
          <a href="/cv" className="hover:text-blue-400">CV</a>
          <a href="/#applications" className="hover:text-blue-400">Applications</a>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          {/* Ici on pourra mettre un bouton burger menu plus tard */}
          <button className="text-blue-400">Menu</button>
        </div>
      </div>
    </nav>
  );
}