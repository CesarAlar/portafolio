import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/sobreMi";
import Tecnoligias from "./components/Tecnoligias";

export default function App() {
  

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white font-sans">
      {/* Header */}
      <Header/>
      <main className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <Hero/>
        {/* Sobre mí */}
        <SobreMi/>
        {/* Proyectos */}
        <Proyectos/>
        {/* Tecnologías que sé */}
        <Tecnoligias/>
        {/* Contacto */}
        <Contacto/>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} César Saldaña — Hecho con React & Tailwind
      </footer>
    </div>
  );
}
