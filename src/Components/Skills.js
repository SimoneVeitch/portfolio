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
  const [springs, api] = useSprings(skills.length, index => ({
    x: skills[index].position.x,
    y: skills[index].position.y,
    scale: 1,
    zIndex: 0,
    config: { mass: 1, tension: 200, friction: 60 }
  }));

  const bind = useDrag(({ args: [index], movement: [x, y] }) => {
    api.start(i => {
      if (i !== index) return; // Only update the dragged item
      return { x, y, scale: 1.1, zIndex: 1 };
    });
  });

  const handleMouseDown = (index) => {
    api.start(i => {
      if (i !== index) return; // Only update the clicked item
      return { scale: 1.1, zIndex: 1 };
    });
  };

  const handleMouseUp = (index) => {
    api.start(i => {
      if (i !== index) return; // Only update the clicked item
      return { scale: 1, zIndex: 0 };
    });
  };

  return (
    <section id="skills" className="section">
      <h1>Skills Section</h1>
      <div className="skills-container">
        {springs.map((props, index) => (
          <animated.div
            key={skills[index].id}
            className={`skill ${skills[index].shape}`}
            style={{
              ...props,
              backgroundColor: skills[index].backgroundColor,
            }}
            {...bind(index)}
            onMouseDown={() => handleMouseDown(index)}
            onMouseUp={() => handleMouseUp(index)}
          >
            <p>{skills[index].name}</p>
          </animated.div>
        ))}
      </div>
      <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Skills;
