import React, { useRef, useEffect } from "react";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import '../App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current && containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const sectionTop = ref.current.offsetTop - containerTop;

      containerRef.current.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
      <ul className="nav-name">
    <li onClick={() => scrollToSection(homeRef)}>Simone Veitch</li>
  </ul>
        <ul className="nav-links">
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>
      <div className="container" ref={containerRef}>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact scrollToTop={scrollToTop}/>
      </div>
      </div>
      </div>
  );
}

export default App;