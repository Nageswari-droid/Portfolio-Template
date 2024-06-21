import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import NavBar from "./Components/Custom/NavBar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full h-full font-mono">
      <div className="w-full border-0 justify-center">
        <NavBar />
        <div className="w-full bg-[#10172A] pt-10">
          <Home />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
