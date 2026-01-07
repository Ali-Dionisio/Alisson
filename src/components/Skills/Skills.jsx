export default function Skills() {
  const techs = [
    "React",
    "Node.js",
    "Express",
    "JavaScript",
    "HTML",
    "CSS",
    "PL/SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Power BI",
    "Talend (ETL)",
    "API REST",
    "Docker",
    "Git/GitHub",
    "Pacote Office",
  ];

  const softSkills = [
    "Comunicação clara",
    "Pensamento crítico",
    "Atenção aos detalhes",
    "Resiliência",
    "Trabalho em equipe",
    "Adaptabilidade",
    "Gestão de tempo",
    "Ética profissional",
  ];

  return (
    <section id="skills" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center text-slate-800">
          Habilidades & Tecnologias
        </h2>
      </div>

      {/* Linha 1: Techs (Esquerda) */}
      <div className="relative flex flex-col overflow-hidden pause-hover">
        <div className="flex w-[200%] gap-8 animate-scroll">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-slate-50 border border-slate-100 px-8 py-4 rounded-2xl shadow-sm hover:border-blue-300 transition-colors"
            >
              <span className="text-slate-700 font-semibold text-lg">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Linha 2: Soft Skills (Direita) - Adicionado mt-6 e animate-scroll-reverse */}
      <div className="relative flex flex-col overflow-hidden pause-hover mt-6">
        <div className="flex w-[200%] gap-8 animate-scroll-reverse">
          {[...softSkills, ...softSkills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-blue-50/30 border border-blue-100 px-8 py-4 rounded-2xl shadow-sm hover:border-blue-300 transition-colors"
            >
              <span className="text-blue-900 font-semibold text-lg">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
