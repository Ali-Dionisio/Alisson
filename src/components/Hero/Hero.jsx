import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Olá, eu sou o <span className="hero-title-name">Alisson</span>
        </h1>
        <p className="hero-description">
          Desenvolvedor Full Stack focado em criar experiências digitais incríveis.
        </p>
        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn-base btn-primary"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="btn-base btn-secondary"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}