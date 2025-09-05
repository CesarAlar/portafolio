import React from 'react'

export default function Contacto() {
  return (
    <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Contacto</h2>
          <p className="text-neutral-300 mb-8">
            ¿Quieres trabajar conmigo o colaborar en algún proyecto? ¡Conectemos!
          </p>
          <div className="flex justify-center gap-10">
            <a
              href="https://github.com/CesarAlar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-white font-semibold text-lg transition"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cesar-saldana-alarcon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-semibold text-lg transition"
            >
              {/* <IconLinkedIn className="w-7 h-7" /> */}
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              LinkedIn
            </a>
          </div>
    </section>
  )
}
