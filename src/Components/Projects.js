import React, { useEffect, useRef, useState} from 'react';
import furryGif from '../Images/Screen Shot 2024-07-15 at 10.21.32.png';
import javascript from '../Images/javascript-svgrepo-com.svg';
import reactImg from '../Images/react-svgrepo-com.svg';
import html from '../Images/html-5-svgrepo-com.svg';
import  cssImg from '../Images/css3-svgrepo-com.svg';
import apiIntImg from '../Images/api-svgrepo-com.svg';
import reactRouterImg from '../Images/react-router-svgrepo-com.svg';

const Projects = () => {
    const h1Ref = useRef(null);
    const [showProjectInfo, setShowProjectInfo] = useState(false);
    

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

    const toggleProjectInfo = () => {
        setShowProjectInfo(!showProjectInfo);
    };

    return (
        <section id="projects" className="section">
            <h1 ref={h1Ref} className="title-animated-text">Projects</h1>

            <div className="projects-container">

            <div className="project-card">
                    <div className="card-content">
                        <h2>Furry Fave</h2>
                        <div className="icons">
                            <img src={javascript} alt="JavaScript" className="project-icon" />
                            <img src={reactImg} alt="React" className="project-icon" />
                            <img src={html} alt="HTML" className="project-icon" />
                            <img src={cssImg} alt="CSS" className="project-icon" />
                        </div>
                        <div className="pm-image-container">
                        <img src={furryGif} alt="Project 1" className="project-image" />
                        </div>
                        {showProjectInfo && (
                            <div className="project-info">
                                <p>Additional information about the project...</p>
                            </div>
                        )}
                        <div className="project-arrow" onClick={toggleProjectInfo}></div>
                        <div className="buttons">
                            <a href="#" className="button">Source</a>
                            <a href="#" className="button">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-content">
                        <h2>Furry Fave</h2>
                        <div className="icons">
                        <img src={javascript} alt="JavaScript" className="project-icon" />
                            <img src={reactImg} alt="React" className="project-icon" />
                            <img src={html} alt="HTML" className="project-icon" />
                            <img src={cssImg} alt="CSS" className="project-icon" />
                        </div>
                        <img src={furryGif} alt="Project 1" className="project-image" />
                        <div className="project-info">
            <div className="project-arrow"></div>
      </div>
                        <div className="buttons">
                            <a href="#" className="button">Source</a>
                            <a href="#" className="button">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-content">
                        <h2>Furry Fave</h2>
                        <div className="icons">
                        <img src={javascript} alt="JavaScript" className="project-icon" />
                            <img src={reactImg} alt="React" className="project-icon" />
                            <img src={html} alt="HTML" className="project-icon" />
                            <img src={cssImg} alt="CSS" className="project-icon" />
                        </div>
                        <img src={furryGif} alt="Project 1" className="project-image" />
                        <div className="project-info">
            <div className="project-arrow"></div>
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