import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="header-main">
      <nav className="nav-container">
        {/* Logo */}
        <span className="logo-text">
          Alisson.dev
        </span>

        {/* Menu Desktop */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Mobile */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Lateral/Overlay Mobile */}
      <div className={`mobile-overlay ${isOpen ? "menu-open" : "menu-closed"}`}>
        {/* Botão fechar */}
        <div className="mobile-close-container">
          <button onClick={() => setIsOpen(false)} className="mobile-close-btn">
            <X size={32} />
          </button>
        </div>

        {/* Links Mobile */}
        <div className="mobile-links-container">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}