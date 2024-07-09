import React from 'react';

const Skills = ({ id, currentSection }) => {
    return (
        <section id={id} className={`section ${currentSection ? 'in-view' : ''}`}>
          <h1>Skills Section</h1>
          <p>My skills</p>
        </section>
      );
}

export default Skills;