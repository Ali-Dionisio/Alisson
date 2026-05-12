import { ExternalLink } from "lucide-react";
import "./Projects.css";

export default function Projects() {
  const academicProjects = [
    {
      title: "Board de Tarefas",
      desc: "Aplicação para gerenciamento de tarefas e produtividade acadêmica.",
      link: "https://aesthetic-profiterole-f9beec.netlify.app/",
      image: "/boardTarefas.png",
      techs: ["HTML", "CSS", "JS"],
    },
    {
      title: "Portfólio Maria",
      desc: "Landing page desenvolvida como projeto de design e interface para terceiros.",
      link: "https://incandescent-jalebi-e77aa8.netlify.app/",
      image: "/portifolioMaria.png",
      techs: ["HTML", "CSS", "JS"],
    },
    {
      title: "Produtos Digitais",
      desc: "Vitrine interativa para exposição de produtos e serviços online.",
      link: "https://gleaming-gingersnap-0c16d6.netlify.app/",
      image: "/produtosDigitais.png",
      techs: ["HTML", "CSS", "JS"],
    },
  ];

  const featuredProjects = [
    {
      id: "askarip",
      title: "Askarip",
      link: "https://www.askarip.com.br/",
      img: "/askarip.png",
      desc: "Projeto real focado em soluções de backend. Atuei no desenvolvimento da arquitetura de dados e integração de APIs.",
      techs: ["React.js", "Node.js", "Express", "API REST", "MySQL"]
    },
    {
      id: "zellene",
      title: "Zellene",
      link: "https://zellene.com.br/",
      img: "/zellene.png",
      desc: "E-commerce de alto impacto com integração InfinitePay, área do cliente e dashboard administrativo estratégico.",
      techs: ["React.js", "Node.js", "Express", "API REST", "PostgreSQL"]
    },
    {
      id: "niver",
      title: "Convite de Aniversário",
      link: "http://niverheloisa.netlify.app/",
      img: "/niverHello.png",
      desc: "Experiência digital interativa com animações temáticas e sistema RSVP integrado para eventos infantis.",
      techs: ["React.js", "RSVP"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Meus Projetos</h2>

        <h3 className="subtitle-professional">Destaque Profissional</h3>
        
        {featuredProjects.map((proj) => (
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
                {proj.techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}

        <h3 className="subtitle-academic">Projetos Acadêmicos</h3>
        
        <div className="academic-grid">
          {academicProjects.map((project, index) => (
            <div key={index} className="academic-card">
              <div className="academic-img-box">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="academic-info">
                <div className="academic-header">
                  <h4 className="academic-title">{project.title}</h4>
                  <a href={project.link} target="_blank" rel="noreferrer" className="academic-icon">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="academic-desc">{project.desc}</p>
                <div className="tech-list">
                  {project.techs.map(t => <span key={t} className="academic-tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}