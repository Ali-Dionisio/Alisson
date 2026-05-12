import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projetos";
import Footer from "./components/Footer/Footer";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DarkModeToggle />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
