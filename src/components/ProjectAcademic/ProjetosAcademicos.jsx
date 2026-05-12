import { ExternalLink } from "lucide-react";
import "./ProjetosAcademicos.css";

export default function ProjetosAcademicos({ projetos }) {
  // Duplicamos a lista para o efeito de scroll infinito
  const listaInfinita = [...projetos, ...projetos];

  return (
    <>
      <h3 className="subtitle-academic">Projetos Acadêmicos</h3>
      
      <div className="academic-vitrine-horizontal">
        <div className="academic-trilho-horizontal">
          {listaInfinita.map((projeto, index) => (
            <div key={`${projeto.title}-${index}`} className="academic-card-horizontal">
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
      </div>
    </>
  );
}