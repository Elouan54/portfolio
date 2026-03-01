"use client"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md relative">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nom cliquable */}
        <a href="/"
           className="text-xl font-bold hover:text-blue-400"
           onClick={() => setOpen(false)} // ferme le menu si ouvert
        >
          ELOUAN JEANSON
        </a>

        {/* Bouton hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl focus:outline-none"
          >
            {open ? "✖️" : "☰"}
          </button>
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400">Accueil</a>
          <a href="/cv" className="hover:text-blue-400">CV</a>
          <a href="/#applications" className="hover:text-blue-400">Applications</a>
          <a href="/#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-gray-900 mt-2 flex flex-col space-y-2 px-6 pb-4">
          <a href="/" className="hover:text-blue-400" onClick={() => setOpen(false)}>Accueil</a>
          <a href="/cv" className="hover:text-blue-400" onClick={() => setOpen(false)}>CV</a>
          <a href="/#applications" className="hover:text-blue-400" onClick={() => setOpen(false)}>Applications</a>
          <a href="/#contact" className="hover:text-blue-400" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}