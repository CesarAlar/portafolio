 
export default function SobreMi() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-10 py-20">
          <img
            src="/ces.png"
            alt="Foto personal"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg"
          />
          <div className="text-left max-w-xl">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Sobre mí</h2>
            <p className="text-neutral-300 mb-2">
              Estoy enfocado en el desarrollo Front-End. Me gusta participar en proyectos donde aplico mis conocimientos de programación, siempre buscando mejorar y desarrollar mis habilidades.
            </p>
            <p className="text-neutral-400">
              Soy una persona que busca nuevas tecnologías sobre el desarrollo web para mantenerme actualizado y ampliar mi conocimiento; para ello, las pongo en práctica creando proyectos con esas tecnologías.
            </p>
          </div>
    </section>
  )
}
