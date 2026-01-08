import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 border-b border-slate-200/50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Alisson.dev
        </span>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Lateral/Overlay Mobile */}
      <div
        className={`
          fixed inset-0 
          bg-white           
          z-[100]            
          w-full 
          h-screen
          md:hidden
          flex flex-col
          transform transition-transform duration-300 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Área do topo para o botão fechar */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            <X size={32} />
          </button>
        </div>

        {/* Links com fundo isolado */}
        <div className="flex flex-col items-center justify-center flex-1 space-y-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-900 tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
