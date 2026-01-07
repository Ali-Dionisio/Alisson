export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Olá, eu sou o <span className="text-blue-600">Alisson</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Desenvolvedor Full Stack focado em criar experiências digitais
          incríveis
          {/* com React e Node.js. */}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
