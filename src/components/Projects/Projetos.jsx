import ProjetosDestaque from "./ProjetosDestaque";
import ProjetosAcademicos from "./ProjetosAcademicos";
import "./Projects.css";

export default function Projetos() {
  const dadosDestaque = [
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

  const dadosAcademicos = [
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

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Meus Projetos</h2>

        <ProjetosDestaque projetos={dadosDestaque} />
        
        <ProjetosAcademicos projetos={dadosAcademicos} />
      </div>
    </section>
  );
}