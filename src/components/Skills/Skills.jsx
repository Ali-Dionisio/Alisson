import "./Skills.css";

export default function Skills() {
  const techs = [
    "React",
    "IA",
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
    <section id="skills" className="skills-section">
      <div className="skills-title-container">
        <h2 className="skills-title">Habilidades & Tecnologias</h2>
      </div>

      {/* Linha 1: Techs (Esquerda) */}
      <div className="carousel-wrapper">
        <div className="carousel-track animate-scroll">
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="skill-card tech-card">
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Linha 2: Soft Skills (Direita) */}
      <div className="carousel-wrapper mt-6">
        <div className="carousel-track animate-scroll-reverse">
          {[...softSkills, ...softSkills].map((skill, index) => (
            <div key={index} className="skill-card soft-card">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
