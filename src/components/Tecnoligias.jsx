
const tecnologias = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
    "Git",
    "TypeScript" 
];
export default function Tecnoligias() {
  return (
    <section id="tech" className="py-20">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Tecnologías que manejo</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-base">
            {tecnologias.map(tecnologia=>
                <li key={tecnologia} className="bg-blue-950 px-5 py-2 rounded-lg text-blue-200 font-medium">{tecnologia}</li>
            )}
          </ul>
    </section>
  )
}
