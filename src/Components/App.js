import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './NavBar';

const App = () => {

  const SectionStyle={
    height: '100vh',
    width: '100%',
    display: 'flex',
  }
  
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{height: '100vh'}}>
          <Home />
        </FullpageSection>
        <FullpageSection style={{height: '100vh'}}>
          <About />
        </FullpageSection>
        <FullpageSection style={{height: '100vh'}}>
          <Skills />
        </FullpageSection>
        <FullpageSection style={{height: '100vh'}}>
          <Projects />
        </FullpageSection>
        <FullpageSection style={{height: '100vh'}}>
          <Contact />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
);
  }
export default App;
