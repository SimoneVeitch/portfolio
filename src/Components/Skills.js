import React from 'react';
import { useSprings, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const skills = [
  { id: 0, name: 'HTML', shape: 'circle', backgroundColor: '#3498db', position: { x: 0, y: 0 } },
  { id: 1, name: 'CSS', shape: 'triangle', backgroundColor: '#e74c3c', position: { x: 0, y: 0 } },
  { id: 2, name: 'React', shape: 'square', backgroundColor: '#2ecc71', position: { x: 0, y: 0 } },
  { id: 3, name: 'Project Management', shape: 'triangle', backgroundColor: '#e74c3c', position: { x: 0, y: 0 } },
  { id: 4, name: 'JavaScript', shape: 'circle', backgroundColor: '#3498db', position: { x: 0, y: 0 } },
];

const Skills = () => {

  return (
    <section id="skills" className="section">
      <h1>Skills Section</h1>
      <div className="skills-container">
      </div>
      <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Skills;
