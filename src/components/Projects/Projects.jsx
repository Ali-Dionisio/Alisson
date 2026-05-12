import { ExternalLink, Monitor } from "lucide-react";

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

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          Meus Projetos
        </h2>

        {/* PROJETO DESTAQUE: ASKARIP */}
        <div className="mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6 text-center md:text-left">
            Destaque Profissional
          </h3>
          <div className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img
                src="/askarip.png"
                alt="Preview Askarip"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-slate-900">
                  Askarip
                </h4>
                <a
                  href="https://www.askarip.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Projeto real focado em soluções de backend. Atuei no
                desenvolvimento da arquitetura de dados e integração de APIs,
                garantindo performance e integridade das informações.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "Node.js", "Express", "API REST", "MySQL"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
  
          <div className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img
                src="/zellene.png"
                alt="Preview zellene"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-slate-900">
                  Zellene
                </h4>
                <a
                  href="https://zellene.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                E-commerce de alto impacto focado em UX (Experiência do Usuário) e conversão. Integração robusta de pagamentos via API InfinitePay para transações seguras. O sistema conta com um ecossistema completo: área do cliente para gestão de pedidos e um dashboard administrativo com KPIs estratégicos para a gestão do negócio.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "Node.js", "Express", "API REST", "PostgreeSQL"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
  
          <div className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img
                src="/niverHello.png"
                alt="Preview Niver Hello"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-slate-900">
                  Convite de Aniversario
                </h4>
                <a
                  href="http://niverheloisa.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Experiência digital interativa para eventos: convite com animações temáticas e sistema de confirmação de presença (RSVP) integrado. Uma solução criativa e funcional para facilitar a organização de festas infantis através da tecnologia.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "RSVP"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PROJETOS ACADÊMICOS */}
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center md:text-left">
          Projetos Acadêmicos
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all hover:-translate-y-2 shadow-sm group"
            >
              <div className="h-40 overflow-hidden border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold text-slate-900">
                    {project.title}
                  </h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
