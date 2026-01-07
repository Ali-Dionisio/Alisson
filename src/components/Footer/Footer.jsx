import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white py-16 px-4 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Lado Esquerdo: Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            Vamos conversar?
          </h2>
          <p className="text-slate-400 text-lg max-w-sm">
            Estou sempre aberto a novos projetos, parcerias ou apenas para
            trocar uma ideia sobre tecnologia.
          </p>
        </div>

        {/* Lado Direito: Ícones Sociais */}
        <div className="flex gap-5">
          <a
            href="https://github.com/Ali-Dionisio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 group"
            title="GitHub"
          >
            <Github className="w-6 h-6 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/ali-dionisio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 group"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:text-white transition-colors" />
          </a>

          <a
            href="mailto:alisson.a-work@outlook.com"
            className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 group"
            title="Enviar E-mail"
          >
            <Mail className="w-6 h-6 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Linha de Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
        <p>© {currentYear} Alisson Almeida. Todos os direitos reservados.</p>
        <p className="flex items-center gap-2">Feito usando React & Tailwind</p>
      </div>
    </footer>
  );
}
