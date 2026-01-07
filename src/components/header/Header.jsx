export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Alisson.dev
        </span>
        <div className="space-x-8 text-gray-600 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">
            Início
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projetos
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
