
export default function Hero() {
  return (
    <section className="flex flex-col gap-6 items-center text-center pt-16 pb-24">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            <span className="text-blue-400">Desarrollador Front-End</span><br />
            construyendo sitios web modernos.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
            Soy un desarrollador front-end, principalmente con React, enfocado en sitios web modernos y funcionales.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#projects"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-lg transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-blue-400 text-blue-400 hover:bg-blue-900/60 rounded-lg font-semibold text-lg transition"
            >
              Contacto
            </a>
          </div>
    </section>
  )
}
