import React from 'react';

const Projects = ({ id, currentSection }) => {
    return (
        <section id={id} className={`section ${currentSection ? 'in-view' : ''}`}>
          <h1>Project Section</h1>
          <p>Projects</p>
        </section>
      );
}

export default Projects;