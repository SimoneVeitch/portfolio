import React from 'react';

const About = ({ id, currentSection }) => {
    return (
        <section id={id} className={`section ${currentSection ? 'in-view' : ''}`}>
          <h1>About Section</h1>
          <p>About me</p>
        </section>
      );
}

export default About;