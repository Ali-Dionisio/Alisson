import { ExternalLink } from "lucide-react";

export default function ProjetosAcademicos({ projetos }) {
  return (
    <>
      <h3 className="subtitle-academic">Projetos Acadêmicos</h3>
      <div className="academic-grid">
        {projetos.map((projeto, index) => (
          <div key={index} className="academic-card">
            <div className="academic-img-box">
              <img src={projeto.image} alt={projeto.title} />
            </div>
            <div className="academic-info">
              <div className="academic-header">
                <h4 className="academic-title">{projeto.title}</h4>
                <a href={projeto.link} target="_blank" rel="noreferrer" className="academic-icon">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="academic-desc">{projeto.desc}</p>
              <div className="tech-list">
                {projeto.techs.map((tecnologia) => (
                  <span key={tecnologia} className="academic-tech-tag">{tecnologia}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}