import { ExternalLink } from "lucide-react";

export default function ProjetosDestaque({ projetos }) {
  return (
    <>
      <h3 className="subtitle-professional">Destaque Profissional</h3>
      {projetos.map((proj) => (
        <div key={proj.id} className="featured-card">
          <div className="featured-image-box">
            <img src={proj.img} alt={proj.title} />
          </div>
          <div className="featured-content">
            <div className="featured-header">
              <h4 className="featured-title">{proj.title}</h4>
              <a href={proj.link} target="_blank" rel="noreferrer" className="external-icon">
                <ExternalLink size={24} />
              </a>
            </div>
            <p className="featured-desc">{proj.desc}</p>
            <div className="tech-list">
              {proj.techs.map((tecnologia) => (
                <span key={tecnologia} className="tech-tag">{tecnologia}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}