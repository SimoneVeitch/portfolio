import React, { useEffect, useRef } from 'react';

import projectImage1 from '../Images/project1.jpg';

const Projects = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    h1Ref.current.classList.add('visible');
                } else {
                    h1Ref.current.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.5 // Adjust as needed
        });

        observer.observe(h1Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="section">
            <h1 ref={h1Ref} className="title-animated-text">Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <div className="card-content">
                        <h2>Project 1</h2>
                        <div className="icons">
                            <span className="icon">JS</span>
                            <span className="icon">React</span>
                            <span className="icon">HTML</span>
                            <span className="icon">CSS</span>
                        </div>
                        <img src={projectImage1} alt="Project 1" className="project-image" />
                        <div className="overlay">
                            <button className="project-arrow">More Info</button>
                        </div>
                        <div className="buttons">
                            <a href="#" className="button">Source</a>
                            <a href="#" className="button">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-content">
                        <h2>Project 2</h2>
                        <div className="icons">
                            <span className="icon">JS</span>
                            <span className="icon">React</span>
                            <span className="icon">HTML</span>
                            <span className="icon">CSS</span>
                        </div>
                        <img src={projectImage1} alt="Project 2" className="project-image" />
                        <div className="overlay">
                            <button className="project-arrow">More Info</button>
                        </div>
                        <div className="buttons">
                            <a href="#" className="button">Source</a>
                            <a href="#" className="button">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-content">
                        <h2>Project 3</h2>
                        <div className="icons">
                            <span className="icon">JS</span>
                            <span className="icon">React</span>
                            <span className="icon">HTML</span>
                            <span className="icon">CSS</span>
                        </div>
                        <img src={projectImage1} alt="Project 3" className="project-image" />
                        <div className="overlay">
                            <button className="project-arrow">More Info</button>
                        </div>
                        <div className="buttons">
                            <a href="#" className="button">Source</a>
                            <a href="#" className="button">Live</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
        </section>
    );
}

export default Projects;