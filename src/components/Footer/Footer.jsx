import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css"; // Importando o CSS aqui

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        
        {/* Lado Esquerdo: Texto */}
        <div className="footer-text-side">
          <h2 className="footer-title">
            Vamos conversar?
          </h2>
          <p className="footer-description">
            Estou sempre aberto a novos projetos, parcerias ou apenas para
            trocar uma ideia sobre tecnologia.
          </p>
        </div>

        {/* Lado Direito: Ícones Sociais */}
        <div className="social-links">
          <a
            href="https://github.com/Ali-Dionisio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://www.linkedin.com/in/ali-dionisio/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="LinkedIn"
          >
            <Linkedin />
          </a>

          <a
            href="mailto:alisson.a-work@outlook.com"
            className="social-icon-btn"
            title="Enviar E-mail"
          >
            <Mail />
          </a>
        </div>
      </div>

      {/* Linha de Copyright */}
      <div className="footer-bottom">
        <p>© {currentYear} Alisson Almeida. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}