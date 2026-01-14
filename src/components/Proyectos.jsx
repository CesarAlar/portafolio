
const proyectos = [
    {}
]
export default function Proyectos() {
  return (
    <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* inea */}
            <div className="bg-[#18181c] rounded-2xl shadow-lg p-6 flex flex-col hover:scale-[1.02] transition">
              <div className=" bg-blue-950 rounded-lg mb-4 flex items-center justify-center text-blue-400 text-3xl font-bold overflow-hidden">
                <img src="inea.png" alt="inea" className="max-w-full w-full h-full"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Plataforma Educativa del INEA</h3>
              <p className="text-neutral-300 mb-4">
                Colaboré en el desarrollo de una plataforma web institucional para el Instituto Nacional para la Educación de los Adultos (INEA). Este proyecto tiene como objetivo facilitar el acceso a información, recursos y trámites educativos.
              </p>
              <ul className="text-neutral-400 text-sm mb-2 list-disc ml-5">
                <li>Migración y estandarización de estilos con Tailwind CSS</li>
                <li>Refactorización de componentes para mejorar mantenibilidad</li>
                <li>Organización clara de secciones y rutas dinámicas con Next.js</li>
                <li>Trabajo colaborativo en GitHub con control de versiones</li>
              </ul>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">Next.js</span>
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">TailwindCSS</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="http://cdmx.inea.gob.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
            {/* tazas */}
            <div className="bg-[#18181c] rounded-2xl shadow-lg p-6 flex flex-col hover:scale-[1.02] transition">
              <div className=" bg-blue-950 rounded-lg mb-4 flex items-center justify-center text-green-300 text-3xl font-bold">
                <img src="tienda-tazas.png" alt="tienda-tazas" className="max-w-full w-full h-full"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Landing Page para Negocio de Tazas y Playeras</h3>
              <p className="text-neutral-300 mb-2">
                Desarrollé una landing page para un pequeño emprendimiento de productos personalizados (tazas, playeras, etc). El objetivo era mostrar productos de manera visual y profesional, facilitar el contacto y potenciar las ventas en línea.
              </p>
              <ul className="text-neutral-400 text-sm mb-2 list-disc ml-5">
                <li>Diseño responsivo desde cero con React y Tailwind CSS</li>
                <li>Galería interactiva de productos</li>
                <li>Sección de contacto y redes sociales</li>
                <li>Comunicación directa con el cliente para iteraciones</li>
              </ul>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">Vite</span>
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">React</span>
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">TailwindCSS</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://victor-shop.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
            {/* Contador de cal */}
            <div className="bg-[#18181c] rounded-2xl shadow-lg p-6 flex flex-col hover:scale-[1.02] transition">
              <div className=" bg-blue-950 rounded-lg mb-4 flex items-center justify-center text-green-300 text-3xl font-bold">
                <img src="calorias.png" alt="administrador-productos" className="max-w-full w-full h-full"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Contador de Calorias</h3>
              <p className="text-neutral-300 mb-4">
                Aplicación para registrar el conteo de calorías de alimentos y ejercicio que el usuario hace, también permite editar y eliminar los registros que se hacen, los registros se almacenan en localStorage y el diseño es responsivo.
              </p>
              <ul className="text-neutral-400 text-sm mb-2 list-disc ml-5">
                <li>Diseño responsivo con Tailwind CSS</li>
                <li>Uso de useContext</li>
                <li>uso de useReducer</li>
                <li>LocalStorage para almacenar los registros</li>
              </ul>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">TypeScript</span>
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">React</span>
                <span className="bg-blue-950 px-3 py-1 rounded-lg text-blue-200 font-medium">TailwindCSS</span>
              </div>
              <a
                href="https://contador-decalorias.netlify.app/"
                className="text-green-300 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto →
              </a>
            </div>
            {/* DevTree */}
            <div className="bg-[#18181c] rounded-2xl shadow-lg p-6 flex flex-col hover:scale-[1.02] transition">
              <div className=" bg-blue-950 rounded-lg mb-4 flex items-center justify-center text-green-300 text-3xl font-bold">
                <img src="devtree.png" alt="administrador-productos" className="max-w-full w-full h-full"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">DevTree</h3>
              <p className="text-neutral-300 mb-4">
                Desarrollé un clon sencillo de LinkTree, cuenta con inicio de sesión, verificador de handles, publicación de links de redes sociales y personalización de perfil, actualizaciòn de descripción, imagen y handle. 
              </p>
              <ul className="text-neutral-400 text-sm mb-2 list-disc ml-5">
                <li>Diseño responsivo usando Tailwind CSS</li>
                <li>Autentigicacion con JSON WEB TOKEN</li>
                <li>Uso de MongoDB</li>
                <li>Express</li>
              </ul>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="bg-blue-950 px-1 lg:px-3 py-1 rounded-lg text-blue-200 font-medium">React</span>
                <span className="bg-blue-950 px-1 lg:px-3 py-1 rounded-lg text-blue-200 font-medium">TypeScript</span>
                <span className="bg-blue-950 px-1 lg:px-3 py-1 rounded-lg text-blue-200 font-medium">Express</span>
                <span className="bg-blue-950 px-1 lg:px-3 py-1 rounded-lg text-blue-200 font-medium">MongoDB</span>
              </div>
              <a
                href="https://github.com/CesarAlar/deploy_devtree_backend/tree/main/src"
                className="text-green-300 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto →
              </a>
            </div>

          </div>
    </section>
  )
}
