import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-[#0c0c0e]/80 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-6 px-4">
          <div className="flex items-center gap-3">
            <img
              src="/ces.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            /> 
            <span className="font-bold tracking-wide text-xl text-blue-400">César Alarcón</span>
          </div>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
            <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
            <a href="#tech" className="hover:text-blue-400 transition">Tecnologías</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-6 h-0.5 bg-blue-400 mb-1"></span>
            <span className="block w-6 h-0.5 bg-blue-400 mb-1"></span>
            <span className="block w-6 h-0.5 bg-blue-400"></span>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-[#0c0c0e] text-end shadow-inner border-t border-neutral-800 px-4 py-2">
            <a href="#about" className="block p-2 hover:text-blue-400">Sobre mí</a>
            <a href="#projects" className="block p-2 hover:text-blue-400">Proyectos</a>
            <a href="#tech" className="block p-2 hover:text-blue-400">Tecnologías</a>
            <a href="#contact" className="block p-2 hover:text-blue-400">Contacto</a>
          </nav>
        )}
    </header>
  )
}
