import { ExternalLink } from "lucide-react";
import "./ProjetosDestaque.css";

export default function ProjetosDestaque({ projetos }) {
  const listaDuplicada = [...projetos, ...projetos];

  return (
    <>
      <h3 className="subtitle-professional">Profissional (Para pessoas reais)</h3>
      
      <div className="projetos-vitrine">
        <div className="projetos-trilho">
          {listaDuplicada.map((proj, index) => (
            <div key={`${proj.id}-${index}`} className="featured-card">
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
        </div>
      </div>
    </>
  );
}