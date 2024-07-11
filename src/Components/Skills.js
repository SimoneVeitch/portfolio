import React, { useEffect, useRef } from 'react';
import hand from '../Images/hand.gif';
import javascript from '../Images/javascript-svgrepo-com.svg';
import reactImg from '../Images/react-svgrepo-com.svg';
import html from '../Images/html-5-svgrepo-com.svg';
import  cssImg from '../Images/css3-svgrepo-com.svg';
import githubImg from '../Images/github-142-svgrepo-com.svg';
import designImg from '../Images/responsive-device-svgrepo-com.svg';
import apiIntImg from '../Images/api-svgrepo-com.svg';
import reactRouterImg from '../Images/react-router-svgrepo-com.svg';
import jiraImg from '../Images/jira-svgrepo-com.svg';
import adobeImg from '../Images/adobe-illustrator-svgrepo-com.svg';
import pmImg from '../Images/gantt-solid-svgrepo-com.svg';
import vscImg from '../Images/visual-studio-code-svgrepo-com.svg';
import npmImg from '../Images/npm-icon-svgrepo-com.svg';

const Skills = () => {

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
    <section id="skills" className="section">
      <h1 ref={h1Ref} className="title-animated-text">Skills</h1>
      <p>
          Let's team up, collaborate, and turn ideas into reality! <br />Be part of my journey as we create and innovate together.
          </p>
      <div className="skills-container">

                <div className="skills-card">
                    <div className="skills-content">
                <img src={javascript}/>
                        <h2>JavaScript</h2>

                        </div>
                    </div>

                    <div className="skills-card">
                    <div className="skills-content">
                <img src={reactImg}/>
                        <h2>React</h2>
                        
                        </div>
                    </div>

                    <div className="skills-card">
                    <div className="skills-content">
                <img src={html}/>
                        <h2>HTML</h2>
                        
                        </div>
                    </div>

                    <div className="skills-card">
                    <div className="skills-content">
                <img src={cssImg}/>
                        <h2>CSS</h2>
                       
                        </div>
                    </div>

                    <div className="skills-card">
                    <div className="skills-content">
                <img src={githubImg}/>
                        <h2>GitHub</h2>
                      
                        </div>
                    </div>

                    <div className="skills-card">
                    <div className="skills-content">
                <img src={designImg}/>
                        <h2>Responsive Design</h2>
                     
                        </div>
                    </div>

                    <div className="skills-card">
                    <div className="skills-content">
                <img src={apiIntImg}/>
                        <h2>API Integration</h2>
                       
                        </div>
                    </div>
                    <div className="skills-card">
                    <div className="skills-content">
                <img src={reactRouterImg}/>
                        <h2>React Router</h2>
                        
                        </div>
                    </div>
                    <div className="skills-card">
                    <div className="skills-content">
                <img src={jiraImg}/>
                        <h2>Jira</h2>
                       
                        </div>
                    </div>
                    <div className="skills-card">
                    <div className="skills-content">
                <img src={adobeImg}/>
                        <h2>Adobe Illustrator</h2>
                       
                        </div>
                    </div>
                    <div className="skills-card">
                    <div className="skills-content">
                <img src={pmImg}/>
                        <h2>Project Management</h2>
                        
                        </div>
                    </div>
                    <div className="skills-card">
                    <div className="skills-content">
                <img src={vscImg}/>
                        <h2>Visual Studio Code</h2>
                        
                        </div>
                    </div>
                    <div className="skills-card">
                    <div className="skills-content">
                <img src={npmImg}/>
                        <h2>NPM</h2>
                     
                        </div>
                    </div>
                    </div>

                    <img src={hand} alt="Hand clicking button GIF" className="hand-gif" />

                    

      <div className="scroll-down">
        <p>Scroll</p>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Skills;
